const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require('method-override')
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local")
const User = require("./models/user.js");   

const listingRouter = require("./routes/listing.js")
const reviewRouter = require("./routes/review.js")
const userRouter = require("./routes/user.js")

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/BearBnb');
} 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended : true})); //req body ki body ko parse krne ke liye
app.use(methodOverride('_method'))
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const sessionOptions = {
    secret : "mysupersecretcode",
    resave : false,
    saveUninitialized : true,
    cookie: {
        expires: Date.now() + 7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
        httpOnly : true  //cross scripting attacks se prevent krne ke liye
    }
}

app.get("/", (req, res) => {
    res.send("Hi, I am root.");
});

app.use(session(sessionOptions));
app.use(flash());  // saare routes se pehle use krna hota

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    // console.log(res.locals.success);  // to check empty success
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})

// app.get("/demouser", async(req,res)=>{
//     let fakeUser = new User({
//         email : "student@hemant",
//         username : "delta-student"
//     })
//     let regisUser = await User.register(fakeUser, "helloworld");
//     res.send(regisUser);
// })
 
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);


app.use((req, res, next) => {
    next(new ExpressError(404, "Page not found!"));
});

app.use((err, req, res, next) => {
    let {statusCode=500, message="Something went wrong!"} = err;
    res.status(statusCode).render("error.ejs", {message});
})

// app.get("/testListing", async (req, res) => {
//     let sampleListing = new Listing ({
//         title : "My New Villa",
//         description : "By the mountains",
//         price : 1200,
//         loaction : "Chamoli, Uttrakhand",
//         country : "India",
//     })
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful test");
// });

app.listen(8080, () =>{
    console.log("server listening on port 8080");
});


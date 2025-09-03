const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require('method-override')
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const wrapAsync = require("./utils/wrapAsync.js");
const {listingSchema} = require("./schema.js");
const listings = require("./routes/listings.js")
const session = require("express-session");
const flash = require("connect-flash");


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
        httpOnly : true
    }
}

app.get("/", (req, res) => {
    res.send("Hi, I am root.");
});

app.use(session(sessionOptions))
app.use(flash());

app.use((req, res, next)=> {
    res.locals.success = req.flash("success");
    next();
})

app.use("/listings", listings);


main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/BearBnb');
} 



app.get("/testListing", async (req, res) => {
    let sampleListing = new Listing ({
        title : "My New Villa",
        description : "By the mountains",
        price : 1200,
        loaction : "Chamoli, Uttrakhand",
        country : "India",
    })
    await sampleListing.save();
    console.log("sample was saved");
    res.send("successful test");
});

app.use((req, res, next) => {
    next(new ExpressError(404, "Page not found!"));
});

app.use((err, req, res, next) => {
    let {statusCode=500, message="Something went wrong!"} = err;
    res.status(statusCode).render("error.ejs", {message});
    // res.status(statusCode).send(message);
})

app.listen(8080, () =>{
    console.log("server listening on port 8080");
});


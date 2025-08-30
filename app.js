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


app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'))
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
app.use("/listings", listings);

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/BearBnb');
} 

app.get("/", (req, res) => {
    res.send("Hi, I am root.");
});

const validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);
    if(error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

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

app.use((req, res, next) => {
    next(new ExpressError(404, "Page not found!"));
});

app.use((err, req, res, next) => {
    let {statusCode=500, message="Something went wrong!"} = err;
    res.status(statusCode).render("error.ejs", {message});
    // res.status(statusCode).send(message);
})

app.listen(8080, () =>{
    console.log("Server listening on port 8080");
});


const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {listingSchema} = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");


const validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);
    if(error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

router.get("/", async(req,res) => {
    const allListings = await Listing.find();
    res.render("listings/index.ejs", {allListings});
})

router.get("/new",(req, res) => {
    res.render("./listings/new.ejs");
})

router.get("/:id", async(req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
})

// Create Route
router.post("/", validateListing,wrapAsync(async(req, res) => {
    let result = listingSchema.validate(req.body);
    console.log(result);
    if(result.error) {
        throw new ExpressError(400, result.error);
    }
    const newListing = new Listing(req.body.listing); 
    await newListing.save();
    res.redirect("/listings");
}))

// Edit Route
router.get("/:id/edit", async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
})

// Update Route
router.put("/:id", validateListing, wrapAsync(async(req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
}))

router.delete("/:id", async(req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log("Deleted listing: " + deletedListing);
    res.redirect("/listings");
})

module.exports = router;
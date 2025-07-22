const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require('method-override')
const ejsMate = require("ejs-mate");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'))
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

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

app.get("/listings", async(req,res) => {
    const allListings = await Listing.find();
    res.render("listings/index.ejs", {allListings});
})

app.get("/listings/new",(req, res) => {
    res.render("./listings/new.ejs");
})

app.get("/listings/:id", async(req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
})

app.post("/listings", async(req, res)=> {
    const newListing = new Listing(req.body.listing); 
    await newListing.save();
    res.redirect("/listings");
})

app.get("/listings/:id/edit", async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
})

app.put("/listings/:id", async(req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
})

app.delete("/listings/:id", async(req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log("Deleted listing: " + deletedListing);
    res.redirect("/listings");
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
    console.log("Server listening on port 8080");
});


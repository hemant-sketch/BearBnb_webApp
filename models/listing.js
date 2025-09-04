const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviews.js")

const listingSchema = new Schema ({
    title : {
        type : String,
        required : true,
    },
    description : String,
    image : {
        url : {
            type : String,
            // default mtlb agar aayi hi nahi kuch bhi toh yeh default
            default: "https://images.unsplash.com/photo-1531183436556-51f742660c8d?q=80&w=1240&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            set: (v) => v === "" ? "https://images.unsplash.com/photo-1531183436556-51f742660c8d?q=80&w=1240&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            : v,   //v original value  //yeh free image unsplash se mil jaati
        },
        filename: String,
    },

    price : Number,
    location : String,
    country : String, 
    reviews : [
        {
            type : Schema.Types.ObjectId,
            ref : "Review",
        }
    ]
})

listingSchema.post("findOneAndDelete", async(listing)=> {
    if(listing){
        await Review.deleteMany({id : {$in: listing.reviews}});
    }
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;






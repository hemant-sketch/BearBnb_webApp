const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema ({
    title : {
        type : String,
        required : true,
    },
    description : String,
    image : {
        url :{
            type : String,
            default: "https://unsplash.com/photos/brown-wooden-house-surrounded-by-trees-at-daytime-xvY3zEBk0Ic",
            set: (v) => v == "" ? "https://unsplash.com/photos/brown-wooden-house-surrounded-by-trees-at-daytime-xvY3zEBk0Ic"
            : v,   //v original value
        },
        filename: String,
    },

    price : Number,
    location : String,
    country : String, 
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;






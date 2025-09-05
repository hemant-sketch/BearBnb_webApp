const Listing = require("../models/listing.js");
const Review = require("../models/reviews.js");

module.exports.createReview = async(req, res)=> {
   let {id} = req.params; 
   let listing =  await Listing.findById((req.params.id))
   let newReview = new Review(req.body.review);
   newReview.author = req.user._id;
   listing.reviews.push(newReview);

   await newReview.save();
   await listing.save();
   req.flash("success", "New review added!");
   res.redirect(`/listings/${id}`);
}

module.exports.destroyReview = async(req, res) => {
    let {id, reviewId} = req.params;
    // pull operator existing array se 
    await Listing.findByIdAndUpdate(id, {$pull: {reviews : reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
}
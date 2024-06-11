const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing");
const {validateReview, isLoggedin, isReviewAuthor}= require("../middleware");

const reviewController = require("../controllers/reviews.js");








// Post route

router.post("/",isLoggedin, validateReview,wrapAsync( reviewController.createReview));
    
    // delete route for reviews
    router.delete("/:reviewId",isLoggedin,isReviewAuthor,
    wrapAsync(reviewController.destroyReview));


    module.exports = router;
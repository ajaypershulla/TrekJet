const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing");
const {isLoggedin , isOwner ,validateListing} = require("../middleware.js");

const listingController = require("../controllers/listings.js");

router.route("/")
.get( wrapAsync(listingController.index))
.post(isLoggedin, validateListing, wrapAsync(listingController.createListing));

// New Route
router.get("/new", isLoggedin, listingController.renderNewForm);


router.route("/:id")
.get( wrapAsync(listingController.showListing))
.put( isLoggedin,isOwner, validateListing, wrapAsync(listingController.updateListing))
.delete(isLoggedin,isOwner, wrapAsync(listingController.destroyListing));




// Edit Route
router.get("/:id/edit",isLoggedin,isOwner, wrapAsync(listingController.renderEditForm));




module.exports = router;

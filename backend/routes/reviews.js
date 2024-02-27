const express = require("express");
const { createReview } = require("../controllers/reviewController.js");
const { verifyUser } = require("../utils/verifyToken.js");
const router = express.Router();

router.post("/:tourId", createReview);

module.exports = router;

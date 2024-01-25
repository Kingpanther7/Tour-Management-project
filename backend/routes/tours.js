const express = require("express");
const { createTour } = require("../controllers/tourController.js");
const router = express.Router();

// create new tour
router.post("/", createTour);

module.exports = router;

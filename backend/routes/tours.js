const express = require("express");
const {
  createTour,
  updateTour,
  deleteTour,
  getSingleTour,
  getAllTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCounts,
} = require("../controllers/tourController.js");
const router = express.Router();

const { verifyAdmin } = require("../utils/verifyToken.js");

// create tour data
router.post("/", verifyAdmin, createTour);
// update tour data
router.put("/:id", verifyAdmin, updateTour);
// delete tour data
router.delete("/:id", verifyAdmin, deleteTour);
// get single tour data
router.get("/:id", getSingleTour);
// get all tour data
router.get("/", getAllTour);
// get tour data by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCounts", getTourCounts);
module.exports = router;

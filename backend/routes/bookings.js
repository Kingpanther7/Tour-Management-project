const express = require("express");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken.js");
const {
  createBooking,
  getAllBooking,
  getBooking,
} = require("../controllers/bookingController.js");

const router = express.Router();

router.post("/", createBooking);
router.get("/:id", getBooking);
router.get("/", getAllBooking);

module.exports = router;

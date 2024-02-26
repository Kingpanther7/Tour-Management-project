const Booking = require("../models/Booking.js");

const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);

  try {
    const savedBooking = await newBooking.save();

    res.status(200).json({
      success: true,
      message: "Tour booked successfully",
      data: savedBooking,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Could not book tour",
    });
  }
};

// get single booked tour data
const getBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const booking = await Booking.findById(id);

    res.status(200).json({
      success: true,
      message: "Booking retrieved successfully",
      data: booking,
    });
  } catch (err) {
    res.status(404).json({ success: true, message: "internal server error" });
  }
};

// get all booked tour data
const getAllBooking = async (req, res) => {
  try {
    const bookings = await Booking.find();

    res.status(200).json({
      success: true,
      message: "Booking retrieved successfully",
      data: bookings,
    });
  } catch (err) {
    res.status(500).json({ success: true, message: "internal server error" });
  }
};

module.exports = {
  createBooking,
  getBooking,
  getAllBooking,
};

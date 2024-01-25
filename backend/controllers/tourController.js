const Tour = require("../models/Tour.js");

// create tour
const createTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const savedtour = await newTour.save();
    res.status(200).json({
      status: "success",
      success: true,
      message: "Created tour successfully",
      data: {
        savedtour,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      success: false,
      message: "Failed to create. Try again",
      data: {
        savedtour,
      },
    });
  }
};

module.exports = { createTour };

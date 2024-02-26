const Tour = require("../models/Tour.js");
const Review = require("../models/Review.js");

const createReview = async (req, res) => {
  const tourId = req.params.tourId;
  const newReview = new Review({ ...req.body });

  try {
    const savedReview = await newReview.save();

    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id },
    });

    res.status(200).json({
      success: true,
      message: "Review added successfully",
      data: savedReview,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to add review" });
  }
};

module.exports = {
  createReview,
};

const Tour = require("../models/Tour.js");

// create tour
const createTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: "Created tour successfully",
      data: {
        savedTour,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create. Try again",
      data: {
        savedTour,
      },
    });
  }
};

const updateTour = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Updated tour successfully",
      data: {
        updatedTour,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update. Try again",
    });
  }
};

const deleteTour = async (req, res) => {
  const id = req.params.id;

  try {
    await Tour.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Delete tour successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete. Try again",
    });
  }
};

const getSingleTour = async (req, res) => {
  const id = req.params.id;

  try {
    const findTour = await Tour.findById(id).populate("reviews");
    res.status(200).json({
      success: true,
      message: "Data found",
      data: findTour,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Data not found",
    });
  }
};

const getAllTour = async (req, res) => {
  // for pagination
  const page = parseInt(req.query.page);
  try {
    const allTour = await Tour.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: allTour.length,
      message: "All Data found",
      data: allTour,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Data not found",
    });
  }
};

const getTourBySearch = async (req, res) => {
  // search by
  // 'i' means case sensitive
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    //gte = greater than equal
    const findTour = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");
    res.status(200).json({
      success: true,
      message: "Data found",
      data: findTour,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Data not found",
    });
  }
};

const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(8);

    res.status(200).json({
      success: true,
      message: "Data found",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Data not found",
    });
  }
};
// Get tour counts

const getTourCounts = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();
    res.status(200).json({
      success: true,
      data: tourCount,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Data not found",
    });
  }
};

module.exports = {
  createTour,
  updateTour,
  deleteTour,
  getSingleTour,
  getAllTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCounts,
};

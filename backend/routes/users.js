const express = require("express");
const {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUser,
} = require("../controllers/userController.js");

const router = express.Router();

const { verifyUser, verifyAdmin } = require("../utils/verifyToken.js");

// update user data
router.put("/:id", updateUser);
// delete user data
router.delete("/:id", deleteUser);
// get single user data
router.get("/:id", getSingleUser);
// get all user data
router.get("/", getAllUser);

module.exports = router;

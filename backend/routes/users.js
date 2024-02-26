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
router.put("/:id", verifyUser, updateUser);
// delete user data
router.delete("/:id", verifyUser, deleteUser);
// get single user data
router.get("/:id", verifyUser, getSingleUser);
// get all user data
router.get("/", verifyAdmin, getAllUser);

module.exports = router;

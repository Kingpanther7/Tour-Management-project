const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// User register
const register = async (req, res) => {
  try {
    // Hashing password
    const salt = bcrypt.genSaltSync(10);
    const hashedPw = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPw,
      photo: req.body.photo,
    });

    await newUser.save();

    res
      .status(200)
      .json({ success: true, message: "User registered successfully" });
  } catch {
    res
      .status(500)
      .json({ success: false, message: "Failed to register, try again." });
  }
};

// User login
const login = async (req, res) => {
  const email = req.body.email;

  try {
    const user = await User.findOne({ email });

    // check if user is registered
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const passwordMatch = await bcrypt.compareSync(
      req.body.password,
      user.password
    );

    // check if password is wrong
    if (!passwordMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Wrong password" });
    }

    const { password, role, ...rest } = user._doc;

    // jwt token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "10d" }
    );

    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({ token, userData: { ...rest }, role });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to login" });
  }
};

module.exports = {
  register,
  login,
};

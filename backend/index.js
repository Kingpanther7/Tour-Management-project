const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const tourRoute = require("./routes/tours.js");
const userRoute = require("./routes/users.js");

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
// database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDB");
  } catch (err) {
    console.log("MongoDB Connection Failed");
  }
};
// use middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/tours", tourRoute);
app.use("/users", userRoute);

// for testing
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  connect();
  console.log(`Server listening at http://localhost:${port}`);
});

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch(err => console.log(err));


app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);

app.get("/", (req,res) => {
    res.send("Student API running");
});

module.exports = app;
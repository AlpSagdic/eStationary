const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const fs = require("fs");
var jwt = require("jsonwebtoken");
var cookieParser = require("cookie-parser");

const app = express();

require("dotenv").config();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
  })
);
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, min: 4, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, min: 6 },
});

const UserModel = mongoose.model("User", UserSchema);

mongoose.connect(
  `mongodb+srv://alperen:${process.env.MONGO_PASSWORD}@alp.5oyvlsz.mongodb.net/Statio`
);

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new UserModel({
      name,
      email,
      password: bcrypt.hashSync(password, 12),
    });
    await newUser.save();

    const token = jwt.sign({ name, id: newUser._id }, process.env.SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token).json("ok");
  } catch (err) {
    res.status(400).json(err);
  }
});

app.post("/login", async (req, res) => {
  const { name, password } = req.body;
  try {
    const userInfo = await UserModel.findOne({ name });
    if (!userInfo) {
      return res.status(401).json({ error: "Wrong credentials" });
    }

    const passOk = bcrypt.compareSync(password, userInfo.password);
    if (passOk) {
      const token = jwt.sign(
        { name, id: userInfo._id },
        `${process.env.SECRET}`,
        {}
      );
      res.cookie("token", token).json({
        id: userInfo._id,
        name,
      });
    } else {
      return res.status(401).json({ error: "Wrong credentials" });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

const IP_ADDRESS = process.env.IP_ADDRESS || "0.0.0.0";
const PORT = process.env.PORT || 4000;

app.listen(PORT, IP_ADDRESS, () => {
  console.log("Website working...");
});

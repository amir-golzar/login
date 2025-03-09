const mongoose = require("mongoose");

const express = require("express");
const cors = require("cors");
const body = require("body-parser");

const env = require("dotenv");
env.config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(body.json());

const mongooseurl = mongoose.connect("mongodb://127.0.0.1:27017/config");

const mongodbSchema = mongoose.Schema({
  tname: "String",
  temali: "String",
  password: "Number",
});

const User = mongoose.model("login", mongodbSchema);

app.post("/login", (req, res) => {});

app.listen(process.env.POET);

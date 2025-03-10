const mongoose = require("mongoose");

const express = require("express");
const body = require("body-parser");
const cors = require("cors");
const env = require("dotenv");
env.config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(body.json());

const mongodbUrl = mongoose.connect("mongodb://127.0.0.1:27017/admin");

const userShema = new mongoose.Schema({
  tname: "String",
  temail: "String",
  password: "Number",
});

const Users = mongoose.model("login", userShema);

app.post("/login", async (req, res) => {
  const { tname, temail, password } = req.body;
  //   const theusers = await Users.findOne({ matn: matn });
  //   if (theusers) {
  //     res.status(400).json({ message: "تکراری است", status: "NOK" });
  //   }

  const newUsers = new Users({ tname, temail, password });
  newUsers
    .save()
    .then(() => {
      res.json({ message: "users seved", status: "ok" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "an error occured", status: "fuck me dady" });
    });
});
app.get("/login", async (req, res) => {
  const theusers = await Users.find({}, { _id: false, __v: false });
  res.json(theusers);
});
app.delete("/login", async (req, res) => {
 
  const { temail } = req.body;

  const theUser = await Users.deleteOne({ temail: temail });
  if (theUser) {
    console.log(theUser);
  }
});

app.listen(process.env.PORT);

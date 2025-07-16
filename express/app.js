const express = require("express");
const mongoose = require("mongoose");

// mongoose.connect(``);

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express with AWS working!!!!!!");
});

app.get("/secret", (req, res) => {
  res.send("SECRET! AWS WORKING!!!!!!!!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

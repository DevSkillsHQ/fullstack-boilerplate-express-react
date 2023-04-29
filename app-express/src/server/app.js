const express = require("express");
const bodyParser = require("body-parser");
const api_endpoints = require("../api");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(bodyParser.json());
app.use(cors());

app.use("/", api_endpoints);

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.status(404).send("404 Not Found");
});

function does_method_exist(req, res, next) {
  next();
}

module.exports = app;
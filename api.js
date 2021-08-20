const path = require("path");
const express = require("express");

const api = express();

api.use(express.static(path.join(__dirname, "src")));

api.use("/", express.static("index.html"));

module.exports = api;

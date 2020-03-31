const express = require("express");
const https = require("https");
const fs = require("fs");

const key = fs.readFileSync("./localhost-key.pem");
const cert = fs.readFileSync("./localhost.pem");

const app = express();

https.createServer({ key, cert }, app).listen("3000", () => {
  console.log("Listening on https://localhost:3000");
});

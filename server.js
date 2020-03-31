require("dotenv").config();
const fs = require("fs");
const https = require("https");
const express = require("express");
const { auth, requiresAuth } = require("express-openid-connect");

const key = fs.readFileSync("./localhost-key.pem");
const cert = fs.readFileSync("./localhost.pem");

const app = express();

const config = {
  required: false,
  auth0Logout: true,
  baseURL: "https://localhost:3000",
  issuerBaseURL: process.env.issuerBaseURL,
  clientID: process.env.clientId,
  appSession: {
    secret: process.env.appSessionSecret
  }
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.isAuthenticated() ? "Logged in" : "Logged out");
});

app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.openid.user));
});
https.createServer({ key, cert }, app).listen("3000", () => {
  console.log("Listening on https://localhost:3000");
});

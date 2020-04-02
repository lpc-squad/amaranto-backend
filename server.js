require("dotenv").config();
const cors = require("cors");
const express = require("express");

const jwks = require("jwks-rsa");
const jwt = require("express-jwt");

const app = express();

const port = process.env.PORT || 8080;

/**
 * SETEO
 */

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    audience: process.env.audience,
    issuer: process.env.issuer,
    algorithms: ["RS256"]
  })
});

app.use(
  cors({
    origin: "http://localhost:3000"
  })
);
//app.use(jwtCheck);

/**
 * RUTAS (https://expressjs.com/en/starter/basic-routing.html)
 * 1) Que datos queremos acceder
 * { records, patients }
 * 2) Como los queremos acceder
 * { allRecords, recordsById, allPatients, patientsById, (patientsByDoctorId) }
 * 3) Hacerlos >:v
 */

// app.METHOD(PATH, HANDLER) // DOCUMENTACION!
app.get("/authorized", function onDone(req, res) {
  res.send("Secured Resource");
});

// Patients

// Records
app.get("/", function name(req, res) {
  res.send(`soy Santu y soy tremendo puto :v`);
});

app.listen(port);

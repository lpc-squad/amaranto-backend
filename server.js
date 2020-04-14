require("dotenv").config();
const cors = require("cors");
const express = require("express");

const mongoose = require("mongoose");
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');


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

(async () => {
  try{
    await mongoose.connect('mongodb+srv://santuDB:the4hoursemen@clinical-records-beta-poxtn.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection.once('open',()=>{console.log("Connected to database")})
  }catch(error){
    console.log("Error al conectarse con la base de datos:",error);
  }
})();

app.use(
  cors({
    origin: "http://localhost:3000"
  })
);
app.use('/graphql',graphqlHTTP({
  schema,
  graphiql:true
}));
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
// ahh PERO CON GRAPHQL
app.post("/authorized", function onDone(req, res) {
  res.send("alooo: ")
});

app.listen(port);
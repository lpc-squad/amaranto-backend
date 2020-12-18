require("dotenv").config();
import cors from "cors";

import express from "express";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server-express";

// import jwks from "jwks-rsa";
// import jwt from "express-jwt";
// const { AuthenticationClient, ManagementClient } = require("auth0");

import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

console.log(typeDefs, resolvers);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const app = express();

const PORT = process.env.PORT || 4000;

/*
const authentication = new AuthenticationClient({
  domain: process.env.domain,
});

const management = new ManagementClient({
  domain: process.env.domain,
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
  // scope: "read:users update:users"
});

/**
 * SETEO
 */

// const jwtCheck = jwt({
//   secret: jwks.expressJwtSecret({
//     jwksUri: "",
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     // audience: process.env.audience,
//     // issuer: process.env.issuer,
//     // algorithms: ["RS256"],
//   }),
// });

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.connection.once("open", () => {
  console.log("Connected to database");
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
server.applyMiddleware({ app, path: "/graphql" });
// app.use(jwtCheck);

/**
 * RUTAS (https://expressjs.com/en/starter/basic-routing.html)
 * 1) Que datos queremos acceder
 * { records, patients }
 * 2) Como los queremos acceder
 * { allRecords, recordsById, allPatients, patientsById, (patientsByDoctorId) }
 * 3) Hacerlos >:v
 */

app.get("/", (req, res) => {
  res.send("toi vivo :'v");
});

// app.get("/check-auth", jwtCheck, function onDone(req, res) {
//   res.send("OK");
// });

// app.METHOD(PATH, HANDLER) // DOCUMENTACION!
// app.get("/data", function onDone(req, res) {
//   authentication
//     .clientCredentialsGrant({
//       audience: process.env.audience,
//       client_id: process.env.clientId,
//       client_secret: process.env.clientSecret,
//     })
//     .then((res) => {
//       console.log("WTF");
//       res.send("OK");
//     })
//     .catch((err) => {
//       console.error("AHA", err);
//       res.send("OK");
//     });
// });

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

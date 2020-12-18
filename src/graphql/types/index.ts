import path from "path";
import { mergeTypes } from "merge-graphql-schemas";

import Address from "./Address";
import Coverage from "./Coverage";
import Doctor from "./Doctor";
import Identification from "./Identification";
import Clinical_Record from "./Clinical_Record";
import Institute_Last_Revision from "./Institute_Last_Revision";
import User_Feedback from "./User_Feedback";
import User from "./User";
import Patient from "./Patient";
import Institute from "./Institute";

//const typesArray = fileLoader(path.join(__dirname, "./"));
const typesArray = [
  Address,
  Clinical_Record,
  Coverage,
  Date,
  Doctor,
  Identification,
  Institute,
  Institute_Last_Revision,
  Patient,
  User_Feedback,
  User,
];

export default mergeTypes(typesArray, { all: true });

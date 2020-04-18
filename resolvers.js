const User = require("./models/user");
const Institute = require("./models/institute");
const ClinicalRecord = require("./models/clinical_record");
const Doctor = require("./models/doctor");
const Patient = require("./models/patient");

const { DateTimeResolver } = require("graphql-scalars");

function getAllDocuments(model) {
  return model.find({}, (error, doc) => {
    if (error) {
      throw new Error(error);
    }
  });
}

const resolvers = {
  Query: {
    users: () => {
      return getAllDocuments(User);
    },
    institutes: () => {
      return getAllDocuments(Institute);
    },
    clinical_records: () => {
      return getAllDocuments(ClinicalRecord);
    },
    doctors: () => {
      return getAllDocuments(Doctor);
    },
    patients: () => {
      return getAllDocuments(Patient);
    },
  },
  Mutation: {
    addUser: (_, args) => {
      let user = new User({
        ...args,
      });
      user.save(function (error, _) {
        if (error) {
          return error;
        } else {
          return user;
        }
      });
    },
  },
  Date: DateTimeResolver,
};

module.exports = resolvers;

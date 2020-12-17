const Doctor = require("../../models/Doctor");
const User = require("../../models/User");
const Institute = require("../../models/Institute");

module.exports = {
  Query: {
    doctors: () =>
      Doctor.find()
        .then((docs) => docs)
        .catch((error) => {
          throw new Error(`Fetching data error: ${error}`);
        }),
    doctor: (_, { id }) =>
      Doctor.findById(id)
        .then((doc) => doc)
        .catch((error) => {
          throw new Error(`Fetching data error: ${error}`);
        }),
  },
  Doctor: {
    user: (root) =>
      User.findById(root.user_id)
        .then((doc) => doc)
        .catch((error) => {
          throw new Error(`Fetching data error: ${error}`);
        }),
    institutes: (root) =>
      Institute.find({ institute_id: { $in: root.institute_id } })
        .then((docs) => docs)
        .catch((error) => {
          throw new Error(`Fetching data error: ${error}`);
        }),
  },
};

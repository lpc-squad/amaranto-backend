import DoctorModel from "../../models/Doctor";
import User from "../../models/User";
import Institute from "../../models/Institute";

export default {
  Query: {
    doctors: () =>
      DoctorModel.find()
        .then((docs) => docs)
        .catch((error) => {
          throw new Error(`Fetching data error: ${error}`);
        }),
    doctor: (_, { id }) =>
      DoctorModel.findById(id)
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

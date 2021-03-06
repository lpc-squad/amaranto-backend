import User from "../../models/User";
import Patient from "../../models/Patient";

export default {
  Query: {
    patient: (_, { id }) =>
      Patient.findById(id)
        .then((doc) => doc)
        .catch((error) => {
          throw new Error(
            `Error at fetching data from DB. File: ${__dirname}. Error: ${error}`
          );
        }),
    patients: () =>
      Patient.find()
        .then((patients) => patients)
        .catch((error) => {
          throw new Error(
            `Error at fetching data from DB.: File: ${__dirname}. Error:${error}`
          );
        }),
    patientsFromInstitute: (_, { institute_id }) =>
      Patient.find({ "institute_last_revision.institute_id": institute_id })
        .then((patients) => patients)
        .catch((error) => {
          throw new Error(
            `Error at fetching data from DB.: File: ${__dirname}. Error:${error}`
          );
        }),
  },
  Patient: {
    user: (root) =>
      User.findById(root.user_id)
        .then((doc) => doc)
        .catch((error) => {
          throw new Error(
            `Error at fetching data from DB.: File: ${__dirname}. Error:${error}`
          );
        }),
  },
  Mutation: {
    addPatient: async (_, { input }) => {
      try {
        // TODO: Acordate que necesitamos crear un dummy user Y luego poner un nuevo paciente
        // let dummyUser = new User({

        // })
        const patient = new Patient({
          ...input,
        });

        console.log(patient);

        const patientSaved = patient.save();

        return patientSaved;
      } catch (error) {
        throw new Error(
          `Error at saving data from DB.: File: ${__dirname}. Error:${error}`
        );
      }
    },
  },
};

const User = require("../../models/User");
const Patient = require("../../models/Patient");

module.exports = {
  Query: {
    patient: (_, { id }) => Patient.findById(id),
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
  Mutation: {
    addPatient: async (_, { input }) => {
      try {
        // TODO: Acordate que necesitamos crear un dummy user Y luego poner un nuevo paciente
        // let dummyUser = new User({

        // })
        let patient = new Patient({
          ...input,
        });

        console.log(patient);

        const patientSaved = patient.save();

        return patientSaved;
      } catch (error) {
        throw `Error at saving data from DB.: File: ${__dirname}. Error:${error}`;
      }
    },
  },
};

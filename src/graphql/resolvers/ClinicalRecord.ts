import ClinicalRecord from "../../models/Clinical_Record";
import Doctor from "../../models/Doctor";
import Patient from "../../models/Patient";

export default {
  Query: {
    clinicalRecords: () =>
      ClinicalRecord.find()
        .then((docs) => docs)
        .catch((error) => {
          throw new Error(`Error at fetching data from DB: ${error}`);
        }),
    clinicalRecordsFromPatient: (_, { id }) =>
      ClinicalRecord.find({ patient_id: id })
        .then((docs) => docs)
        .catch((error) => {
          throw new Error(`Error at fetching data from DB: ${error}`);
        }),
    clinicalRecordsFromDoctor: (_, { id }) =>
      ClinicalRecord.find({ doctor_id: id })
        .then((docs) => docs)
        .catch((error) => {
          throw new Error(`Error at fetching data from DB: ${error}`);
        }),
  },
  Mutation: {
    addClinicalRecord: (_, { input }) => {
      const clinicalRecord = new ClinicalRecord({
        ...input,
      });
      clinicalRecord.save().catch((error) => {
        throw new Error(
          `Error at saving the clinical record. File ${__dirname}. Error: ${error}`
        );
      });
      return clinicalRecord;
      // return clinicalRecord.save().then(doc=>doc).catch(error=>{throw new Error(`Error at saving the clinical record. File ${__dirname}. Error: ${error}`)})
    },
  },
  Clinical_Record: {
    doctor: (root) =>
      Doctor.findById(root.doctor_id)
        .then((doc) => doc)
        .catch((error) => {
          throw new Error(`Error at fetching data from DB: ${error}`);
        }),
    patient: (root) =>
      Patient.findById(root.patient_id)
        .then((doc) => doc)
        .catch((error) => {
          throw new Error(`Error at fetching data from DB: ${error}`);
        }),
  },
};

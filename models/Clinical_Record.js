const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClinicalRecordSchema = new Schema({
  doctor_id: { type: Schema.Types.ObjectId, ref: "Doctor" },
  patient_id: { type: Schema.Types.ObjectId, ref: "Patient" },
  indications: String,
  _createdAt: { type: Date, default: JSON.stringify(Date.now) },
  diagnosis: { type: String, required: true },
  must_have: { type: String, required: true },
  _updatedAt: { type: Date},
});

module.exports = mongoose.model(
  "Clinical_Record",
  ClinicalRecordSchema,
  "Clinical_Records"
);

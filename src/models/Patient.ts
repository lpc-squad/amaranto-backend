import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const { Schema } = mongoose;

const Institute_Last_Revision = new Schema({
  _last_revision: Date,
  institute_id: { type: Schema.Types.ObjectId, ref: "Institute" },
});

const Coverage = new Schema({
  coverage_name: String,
  plan: String,
  coverage_num: String,
});

const PatientSchema = new Schema({
  profession: String,
  civil_status: String,
  background: String,
  important_info: String,
  user_id: { type: Schema.Types.ObjectId, ref: "User", unique: true },
  // eslint-disable-next-line
  institute_last_revision: [Institute_Last_Revision],
  coverage: [Coverage],
  _createdAt: { type: Date, default: Date.now },
  _updatedAt: { type: Date, default: Date.now },
});

PatientSchema.plugin(uniqueValidator);

export default mongoose.model("Patient", PatientSchema, "Patients");

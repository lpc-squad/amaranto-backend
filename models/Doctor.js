const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const { Schema } = mongoose;

const DoctorSchema = new Schema({
  medical_license_plate: { type: String, required: true, unique: true },
  speciality: String,
  institute_id: [{ type: Schema.Types.ObjectId, ref: "Institute" }],
  user_id: { type: Schema.Types.ObjectId, ref: "User" },
  _createdAt: { type: Date, default: Date.now },
  _updatedAt: { type: Date, default: Date.now },
});

DoctorSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Doctor", DoctorSchema, "Doctors");

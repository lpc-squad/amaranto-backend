import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const InstituteSchema = new Schema({
  institute_name: { type: String, required: true, unique: true },
});

InstituteSchema.plugin(uniqueValidator);

export default mongoose.model("Institute", InstituteSchema, "Institutes");

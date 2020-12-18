import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const IdentificationSchema = new Schema({
  identification_type: { type: String, required: true },
  identification_num: { type: String, required: true },
});

const AddressSchema = new Schema({
  country: String,
  city: String,
  street: String,
  state: String,
  aditional_info: String,
});

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
  enabled: { type: Boolean, default: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  genre: String,
  birth_date: Date,
  phone: String,
  identification: IdentificationSchema,
  address: AddressSchema,
  email: String,
  _verified: { type: Boolean, default: false },
  _createdAt: { type: Date, default: Date.now },
  _updatedAt: { type: Date, default: Date.now },
});

UserSchema.plugin(uniqueValidator);

export default mongoose.model("User", UserSchema, "Users");

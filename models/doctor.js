const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
    "medical_license_plate": {type:String, required:true},
    "speciality": String,
    "institute_id": {type: Schema.Types.ObjectId,ref:"Institute"},
    "user_id": {type: Schema.Types.ObjectId,ref:"User"},
    "_createdAt": {type:Date, default:Date.now},
    "_updatedAt": {type:Date, default:Date.now}
})

module.exports = mongoose.model('Doctor',DoctorSchema,"Doctors");
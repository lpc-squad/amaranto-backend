const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    "medical_license_plate": {type:String, required:true},
    "speciality_description": String,
    "institute_id": {type: Schema.Types.ObjectId,ref:"Institute"},
    "user_id": {type: Schema.Types.ObjectId,ref:"User"},
    "registered_date": {type:Date, default:Date.now}
})

module.exports = mongoose.model('Doctor',doctorSchema,"Doctors");
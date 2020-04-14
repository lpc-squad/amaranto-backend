const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    "medical_license_plate": String,
    "speciality_description": String,
    "institute_id": String,
    "user_id": String,
    "registered_date": Date
})

module.exports = mongoose.model('Doctor',doctorSchema);
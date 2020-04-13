const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clinicalRecordSchema = new Schema({
    "doctor_id": String,
    "patient_id": String,
    "indications": String,
    "_createdAt": String,
    "diagnosis": String,
    "must_have":String
})

module.exports = mongoose.model('Clinical_Records',clinicalRecordSchema);
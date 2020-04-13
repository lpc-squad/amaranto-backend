const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    "profession": String,
    "family_nucleus": String,
    "background": String,
    "important_info": String,
    "user_id": String,
    "registered_date": Date,
    "institute_details":{
        "_last_revision":Date,
        "institute_id":String
    },
    "coverage":{
        "coverage_name": String,
        "plan": String,
        "coverage_num": String
    }
})

module.exports = mongoose.model('Patients',patientSchema);
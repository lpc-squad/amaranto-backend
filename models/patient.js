const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Institute_details = new Schema({
    "_last_revision":Date,
    "institute_id":{type: Schema.Types.ObjectId, ref:"Institute"}
});

const Coverage = new Schema({
    "coverage_name": String,
    "plan": String,
    "coverage_num": String
});

const patientSchema = new Schema({
    "profession": String,
    "family_nucleus": String,
    "background": String,
    "important_info": String,
    "user_id": {type: Schema.Types.ObjectId,ref:"User"},
    "registered_date": {type:Date, default:Date.now},
    "institute_details": Institute_details,
    "coverage": Coverage
});

module.exports = mongoose.model('Patient',patientSchema,"Patients");
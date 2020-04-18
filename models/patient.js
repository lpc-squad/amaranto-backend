const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const Institute_Last_Revision = new Schema({
    "_last_revision":Date,
    "institute_id":{type: Schema.Types.ObjectId, ref:"Institute"}
});

const Coverage = new Schema({
    "coverage_name": String,
    "plan": String,
    "coverage_num": String
});

const PatientSchema = new Schema({
    "profession": String,
    "civil_status": String,
    "background": String,
    "important_info": String,
    "user_id": {type: Schema.Types.ObjectId,ref:"User",unique:true},
    "institute_last_revision": Institute_Last_Revision,
    "coverage": Coverage,
    "_createdAt": {type:Date, default:Date.now},
    "_updatedAt": {type:Date, default:Date.now},
});

PatientSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Patient',PatientSchema,"Patients");
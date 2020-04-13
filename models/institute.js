const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instituteSchema = new Schema({
    "institute_name": String
})

module.exports = mongoose.model('Institutes',instituteSchema);
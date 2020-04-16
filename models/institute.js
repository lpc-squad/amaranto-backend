const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instituteSchema = new Schema({
    "institute_name": {type:String, required:true}
})

module.exports = mongoose.model('Institute',instituteSchema,"Institutes");
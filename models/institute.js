const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const InstituteSchema = new Schema({
    "institute_name": {type:String, required:true,unique:true}
})

InstituteSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Institute',InstituteSchema,"Institutes");
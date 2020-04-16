const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstituteSchema = new Schema({
    "institute_name": {type:String, required:true}
})

module.exports = mongoose.model('Institute',InstituteSchema,"Institutes");
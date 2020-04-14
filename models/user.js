const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    "username": String,
    "password": String,
    "enabled": Boolean,
    "first_name": String,
    "last_name": String,
    "genre":String,
    "birth_date":Date,
    "phone": String,
    "identification_type":{
        "identification_type_description": String,
        "identification_type_num": String
    },
    "address": String,
    "_verified": Boolean
})

module.exports = mongoose.model('User',userSchema);
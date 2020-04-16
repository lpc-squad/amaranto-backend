const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const IdentificationTypeSchema = new Schema({
    "identification_type_description": {type:String,required:true},
    "identification_type_num": {type:String,required:true}
});

const AddressSchema = new Schema({
    "country": String,
    "city": String,
    "street": String,
    "state": String,
    "aditional_info": String
});

const userSchema = new Schema({
    "username": String,
    "password": String,
    "enabled": Boolean,
    "first_name": {type: String,required:true},
    "last_name": {type: String,required:true},
    "genre":String,
    "birth_date":{type:Date, default:Date.now},
    "phone": String,
    "identification_type": IdentificationTypeSchema,
    "address": AddressSchema,
    "_verified": Boolean,
    "email": String
});

module.exports = mongoose.model('User',userSchema,'Users');
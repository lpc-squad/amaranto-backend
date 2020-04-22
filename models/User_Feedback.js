const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserFeedbackSchema = new Schema({
    "user_id": {type: Schema.Types.ObjectId,ref:"User"},
    "_createdAt": {type:Date, default:Date.now},
    "feedback": {type:String, required:true},
});

module.exports = mongoose.model('User_Feedback',UserFeedbackSchema,"User_Feedbacks");
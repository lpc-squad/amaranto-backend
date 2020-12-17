import mongoose from "mongoose";

const { Schema } = mongoose;

const UserFeedbackSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "User" },
  _createdAt: { type: Date, default: Date.now },
  feedback: { type: String, required: true },
});

export default mongoose.model(
  "User_Feedback",
  UserFeedbackSchema,
  "User_Feedbacks"
);

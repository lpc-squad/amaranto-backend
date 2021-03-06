export default `
type User_Feedback {
  user: User
  feedback: String
  _createdAt: Date
}
type Query {
  userFeedbacks: [User_Feedback]
}
type Mutation {
  addFeedback(input: User_Feedback_Input!): User_Feedback
}
input User_Feedback_Input {
  user_id: ID!
  feedback: String!
}`;

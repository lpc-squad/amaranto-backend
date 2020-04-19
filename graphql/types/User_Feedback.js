module.exports=`
type User_Feedback{
    user_id: User,
    _createdAt: Date,
    feedback: String
}
type Query{
    userFeedbacks: [User_Feedback]
}
type Mutation{
    addFeedback(input: User_Feedback_Input!): User_Feedback
}
input User_Feedback_Input{
    user_id: ID!,
    feedback: String!
}
`
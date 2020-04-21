module.exports= `
type Institute_Last_Revision{
    _id: ID!,
    _last_revision: Date,
    institute: Institute
}

input InstituteLastRevisionInput{
    _last_revision: Date,
    institute: InstituteInput!
}
`;
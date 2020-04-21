module.exports=`
type Institute{
    _id:ID!,
    institute_name:String
}

input InstituteInput{
    institute_name
}

type Query{
    institutes: [Institute]
}

type Mutation{
    addInstitute(input:InstituteInput): Institute
}
`;
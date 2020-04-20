module.exports=`
type Institute{
    _id:ID!,
    institute_name:String
}

type Query{
    institutes: [Institute]
}

type Mutation{
    addInstitute(institute_name:String): Institute
}
`;
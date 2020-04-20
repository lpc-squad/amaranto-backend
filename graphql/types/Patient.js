module.exports=`
type Patient{
    _id: ID!,
    profession: String,
    civil_status: String,
    background: String,
    important_info: String,
    user: User,
    institute_last_revision: [Institute_Last_Revision],
    coverage: [Coverage],
    _createdAt: Date,
    _updatedAt: Date,
}
input PatientInput{
    profession: String,
    civil_status: String!,
    background: String,
    important_info: String,
    user_id: ID,
    coverage: [Coverage],
}

type Query{
    patients: [Patient],
    patientsFromInstitute(institute_id: ID): [Patient]
}

type Mutation{
    addPatient(input: PatientInput): Patient
}

`;
export default`
type Patient{
    _id: ID!,
    profession: String,
    civil_status: String,
    background: String,
    important_info: String,
    user_id: User,
    institute_last_revision: Institute_Last_Revision,
    coverage: Coverage,
    _createdAt: Date,
    _updatedAt: Date,
}

type Queery{
    patients: [Patient]
}`;
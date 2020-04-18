export default `
type Doctor{
    _id: ID!,
    medical_license_plate:String,
    speciality:String,
    institute_id: Institute,
    user_id: User,
    _createdAt: Date,
    _updatedAt: Date
}

type Query{
    doctors: [Doctor]
}`;

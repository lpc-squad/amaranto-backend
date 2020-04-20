module.exports= `
type Doctor{
    _id: ID!,
    medical_license_plate:String,
    speciality:String,
    institutes: [Institute],
    user: User,
    _createdAt: Date,
    _updatedAt: Date
}


type Query{
    doctors: [Doctor]
}

`;

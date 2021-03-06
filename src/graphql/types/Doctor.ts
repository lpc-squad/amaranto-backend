export default `
type Doctor {
  _id: ID!
  medical_license_plate: String
  speciality: String
  institutes: [Institute]
  user: User
  _createdAt: Date
  _updatedAt: Date
}

input DoctorInput {
  medical_license_plate: String!
  speciality: String!
  institutes: [InstituteInput]
  user_id: ID
}

type Query {
  doctors: [Doctor]
  doctor(id: ID!): Doctor
}

type Mutation {
  addDoctor(input: DoctorInput): Doctor
}
`;

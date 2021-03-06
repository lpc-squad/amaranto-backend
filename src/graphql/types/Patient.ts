export default `
type Patient {
  _id: ID!
  user: User
  background: String
  profession: String
  coverage: [Coverage]
  civil_status: String
  important_info: String
  institute_last_revision: [Institute_Last_Revision]
  _createdAt: Date
  _updatedAt: Date
}

input PatientInput {
  user_id: ID
  background: String
  profession: String
  civil_status: String!
  important_info: String
  coverage: [CoverageInput]
}

type Query {
  patients: [Patient]
  patient(id: ID!): Patient
  patientsFromInstitute(institute_id: ID): [Patient]
}

type Mutation {
  addPatient(input: PatientInput): Patient
}
`;

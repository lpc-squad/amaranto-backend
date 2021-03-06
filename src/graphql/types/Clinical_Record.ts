export default `
type Clinical_Record {
  _id: ID!
  doctor: Doctor
  patient: Patient
  diagnosis: String
  indications: String
  must_have: String
  _updatedAt: Date
  _createdAt: Date
}
input ClinicalRecordInput {
  doctor_id: ID!
  patient_id: ID!
  diagnosis: String!
  indications: String
  must_have: String!
}
type Query {
  clinicalRecords: [Clinical_Record]
  clinicalRecordsFromPatient(id: ID!): [Clinical_Record]
  clinicalRecordsFromDoctor(id: ID!): [Clinical_Record]
}
type Mutation {
  addClinicalRecord(input: ClinicalRecordInput): Clinical_Record
}
`;

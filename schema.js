const { gql } = require('apollo-server');


const typeDefs = gql`
  scalar Date
  type User{
      _id: ID!,
      username: String,
      password: String,
      enabled: Boolean,
      first_name: String,
      last_name: String,
      genre: String,
      birth_date: Date,
      phone: String,
      address: Address, 
      _verified: Boolean,
      identification: Identification,
      email: String,
      _createdAt: Date,
      _updatedAt: Date
  }
  type Address {
    _id: ID!,
    country: String,
    city: String,
    street: String,
    state: String,
    aditional_info: String
}
  type Identification{
      _id: ID!,
      identification_type: String,
      identification_num: String
  }
  type Patient{
      _id: ID!,
      profession: String,
      civil_status: String,
      background: String,
      important_info: String,
      user_id: User,
      institute_last_revision: Institute_Last_Revision,
      coverage: Coverage
  }
  type Institute_Last_Revision{
      _id: ID!,
      _last_revision: Date,
      institute_id: Institute
  }
  type Coverage{
      _id: ID!,
      coverage_name: String,
      plan: String,
      coverage_num: String
  }
  type Institute{
      _id:ID!,
      institute_name:String
  }
  type Doctor{
      _id: ID!,
      medical_license_plate:String,
      speciality:String,
      institute_id: Institute,
      user_id: User,
      _createdAt: Date,
      _updatedAt: Date
  }
  type Clinical_Record{
      _id: ID!,
      doctor_id: Doctor,
      patient_id: Patient,
      diagnosis: String,
      indications: String,
      must_have: String,
      _createdAt: Date,
      _updatedAt: Date
  }
  type Query {
      users: [User],
      institutes: [Institute],
      clinical_records: [Clinical_Record],
      doctors: [Doctor],
      patients: [Patient]
  }
  type Mutation {
    addUser(input: UserInput): User
  }
  input UserInput {
    username: String,
    password: String,
    first_name: String,
    last_name: String,
    genre: String,
    birth_date: Date,
    phone: String,
    address: AddressInput, 
    identification: IdentificationInput,
    email: String
  }
  input AddressInput {
    country: String,
    city: String,
    street: String,
    state: String,
    aditional_info: String
}
  input IdentificationInput{
      identification_type: String,
      identification_num: String
  }
`;

module.exports = typeDefs;
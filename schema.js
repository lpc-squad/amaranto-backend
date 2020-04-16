const { gql } = require('apollo-server');
/*el Address en realidad seria Type address
type Address {
    country: String,
    city: String,
    street: String,
    state: String,
    aditional_info: String
}
*/
const typeDefs = gql`
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
      identification_type: Identification_type

  }
  type Identification_type{
      _id: ID!,
      identification_type_description: String,
      identification_type_num: String
  }
  type Patient{
      _id: ID!,
      profession: String,
      family_nucleus: String,
      background: String,
      important_info: String,
      user_id: User,
      registered_date: Date,
      institute_details: Institute_details,
      coverage: Coverage
  }
  type Institute_details{
      _id: ID!,
      institute_id: Institute
  }
  type Coverage{
      _id: ID!,
      coverage_name: String,
      plan: String,
      coverage_num: Int
  }
  type Institute{
      _id:ID!,
      institute_name:String
  }
  type Doctor{
      _id: ID!,
      medical_license_plate:String,
      speciality_description:String,
      institute_id: Institute,
      user_id: User,
      registered_date: Date
  }
  type Clinical_Record{
      _id: ID!,
      doctor_id: Doctor,
      patient_id: Patient,
      diagnosis: String,
      indications: String,
      _createdAt: Date,
      must_have: String
  }
  type Query {
      users: [User],
      user(first_name: String): User
  }
`;

module.exports = typeDefs;
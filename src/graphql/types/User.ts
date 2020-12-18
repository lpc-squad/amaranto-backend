export default `
type User {
  _id: ID!
  genre: String
  phone: String
  email: String
  address: Address
  birth_date: Date
  username: String
  password: String
  enabled: Boolean
  last_name: String
  first_name: String
  _verified: Boolean
  identification: Identification
  _createdAt: Date
  _updatedAt: Date
}

type Query {
  users: [User]
}
type Mutation {
  addUser(input: UserInput): User
}

input UserInput {
  genre: String
  phone: String
  email: String
  birth_date: Date
  username: String
  password: String
  last_name: String!
  first_name: String!
  address: AddressInput!
  identification: IdentificationInput!
}
`;

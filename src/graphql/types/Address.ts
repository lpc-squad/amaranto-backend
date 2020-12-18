export default `
  type Address {
    _id: ID!
    country: String
    city: String
    street: String
    state: String
    aditional_info: String
  }
  input AddressInput {
    country: String
    city: String
    street: String
    state: String
    aditional_info: String
  }
`;

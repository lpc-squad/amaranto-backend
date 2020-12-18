export default `
type Identification {
  _id: ID!
  identification_type: String
  identification_num: String
}

input IdentificationInput {
  identification_type: String
  identification_num: String
}
`;

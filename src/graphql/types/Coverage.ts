export default `
type Coverage {
  _id: ID!
  coverage_name: String
  plan: String
  coverage_num: Int
}
input CoverageInput {
  coverage_name: String
  plan: String
  coverage_num: Int
}
`;

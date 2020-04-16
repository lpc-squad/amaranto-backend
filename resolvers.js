const User = require("./models/user");
const Institutes = require("./models/institute");
const Kind = require("graphql/language");
const { GraphQLScalarType } = require("graphql");
const dayjs = require("dayjs");

const userDB = [
  { id: "2", first_name: "pasdad", birth_date: new Date() },
  { id: "3", first_name: "qwedas", birth_date: new Date() },
  { id: "4", first_name: "adsas", birth_date: new Date() },
  { id: "5", first_name: "adewger", birth_date: new Date() },
];

const resolvers = {
  Query: {
    users: () => {
      return userDB;
    },
    user: (_, { first_name: name }) => {
      return userDB.find((obj) => (obj.first_name = name));
    },
    institutes: () => {
      return Institutes.find({});
    },
  },
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Datetime",
    serialize(value) {
      return dayjs(value).format("MM-DD-YYYY");
    },
    parseValue(value) {
      return dayjs(value);
    },
    parseLiteral(ast) {
      if (ast.kind == Kind.INT) {
        return dayjs(ast.value);
      }
      return null;
    },
  }),
};

module.exports = resolvers;

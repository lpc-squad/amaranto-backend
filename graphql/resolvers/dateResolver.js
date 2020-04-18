const Kind = require('graphql/language');
const { GraphQLScalarType }= require('graphql');
const dayjs = require('dayjs');

module.exports={
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
    })
};
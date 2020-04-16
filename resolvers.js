const User = require('./models/user');
const Institute = require('./models/institute')
const Kind = require('graphql/language')
const { GraphQLScalarType }= require('graphql')
const dayjs = require('dayjs')

const userDB=
[{id:"2",first_name: "pasdad",birth_date: new Date()},{id:"3",first_name: "qwedas",birth_date: new Date()},
{id:"4",first_name: "adsas",birth_date: new Date()},{id:"5",first_name: "adewger",birth_date: new Date()}]

const resolvers = {
    Query: {
      users: () =>{
          /*User.find({}).then((result)=>{console.log(result);return result})
                       .catch((error)=>console.log(error))*/
                       
                       return userDB
      },
      user: (_, { first_name: name }) =>{
          /*User.find({first_name: name}).then((result)=>{console.log(result);return result})
                                       .catch((error)=>console.log(error))*/
                                       return userDB.find(obj=> obj.first_name=name)
      },
      institutes: () => {
        Institute.find({}).then((result)=>{console.log(result);return result})
                 .catch((error)=>console.log(error))

      }
    },
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Datetime',
        serialize(value) {
          return dayjs(value).format("MM-DD-YYYY");
        },
        parseValue(value) {
          return dayjs(value);
        },
        parseLiteral(ast) {
          if (ast.kind==Kind.INT) {
              return dayjs(ast.value)
          }
          return null;
        }
      })
  };

module.exports = resolvers;
const User = require('./models/user');
const Institute = require('./models/institute')
const userDB=
[{id:"2",first_name: "pasdad"},{id:"3",first_name: "qwedas"},{id:"4",first_name: "adsas"},{id:"5",first_name: "adewger"}]

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
    }
  };

module.exports = resolvers;
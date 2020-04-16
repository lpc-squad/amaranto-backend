const User = require('./models/user');
module.exports = {
    Query: {
      users: () =>{
          User.find({}, function getUsers(err,result){
              if(err){console.log(err)}
              return result;
          })
      },
      user: (_, { name }) =>{
          User.find({first_name: name}, function getUserByName(err, result){
              if(err){console.log(err)}
              return result;
          })
      }
    }
  };
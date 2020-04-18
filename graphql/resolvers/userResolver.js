const User = require('../../models/User');

module.exports={
    Query: {
        users: () => User.find()
    },
    Mutation: {
    addUser: (_, args) => {
      let user = new User({
        ...args.input
      });
      user.save(function (error, _) {
        if (error) {
          console.log(`Error at File: ${__dirname}. Error: ${error}`)
        }
      });
      return user;
    }
    }
}
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
      user.save().catch(error=>{throw new Error(`Error al guardar usuario: File${__dirname}. Error: ${error}`)});
      return user;
    }
    }
}
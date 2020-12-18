import UserModel from "../../models/User";

export default {
  Query: {
    users: () =>
      UserModel.find()
        .then((doc) => doc)
        .catch((error) => {
          throw new Error(
            `Error at fetching data from Database. File ${__dirname}. Error: ${error}`
          );
        }),
  },
  Mutation: {
    addUser: (_, args) => {
      const user = new UserModel({
        ...args.input,
      });
      user.save().catch((error) => {
        throw new Error(
          `Error al guardar usuario: File${__dirname}. Error: ${error}`
        );
      });
      return user;
    },
  },
};

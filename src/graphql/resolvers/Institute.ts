import Institute from "../../models/Institute";

export default {
  Query: {
    institutes: () =>
      Institute.find()
        .then((docs) => docs)
        .catch((error) => {
          throw new Error(
            `Error at fetching data from DB.File: ${__dirname}. Error: ${error}`
          );
        }),
  },
  Mutation: {
    addInstitute: (_, { input }) => {
      const institute = new Institute({
        ...input,
      });
      institute.save().catch((error) => {
        throw new Error(
          `Error at fetching data from DB.File: ${__dirname}. Error: ${error}`
        );
      });
      return institute;
    },
  },
};

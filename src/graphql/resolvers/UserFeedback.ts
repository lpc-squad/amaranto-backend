import UserFeedback from "../../models/User_Feedback";

export default {
  Query: {
    userFeedbacks: () =>
      UserFeedback.find()
        .then((docs) => docs)
        .catch((error) => {
          throw new Error(
            `Error al recuperar los feedback: File: ${__dirname}. Error: ${error}`
          );
        }),
  },
  Mutation: {
    addFeedback: (_, { input }) => {
      const feedback = new UserFeedback({
        ...input,
      });
      feedback.save().catch((error) => {
        throw new Error(
          `Error al guardar el feedback: File: ${__dirname}. Error: ${error}`
        );
      });
      return feedback;
    },
  },
};

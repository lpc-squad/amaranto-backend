const UserFeedback = require('../../models/User_Feedback');

module.exports={
    Query: {
        userFeedbacks: () => UserFeedback.find()
        .then(docs=>docs)
        .catch(error=>{throw new Error(`Error al recuperar los feedback: File: ${__dirname}. Error: ${error}`)})
    },
    Mutation: {
        addFeedback: (_,{input}) =>{
            let feedback= new UserFeedback({
                ...input
            });
            feedback.save().catch(error=>{throw new Error(`Error al guardar el feedback: File: ${__dirname}. Error: ${error}`)});
            return feedback;
        }
    }
}
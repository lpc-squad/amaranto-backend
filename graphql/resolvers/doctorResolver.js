const Doctor = require('../../models/Doctor');

module.exports={
    Query: {
        doctors: () => Doctor.find()
        .then(docs=>docs)
        .catch(error=>{throw new Error(`Error al recuperar los doctores. File:${__dirname}. Error:${error}`)})
    }
};
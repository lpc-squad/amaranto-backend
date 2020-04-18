const Patient = require('../models/Patient');

module.exports={
    Query: {
        patients: () => Patient.find()

    }
};
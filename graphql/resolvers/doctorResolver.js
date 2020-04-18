const Doctor = require('../models/Doctor');

module.exports={
    Query: {
        doctors: () => Doctor.find()
    }
};
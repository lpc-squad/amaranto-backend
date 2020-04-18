const Institute = require('../models/Institute');

module.exports={
    Query:{
        institutes: () => {
            return Institute.find();
        }
    }
};
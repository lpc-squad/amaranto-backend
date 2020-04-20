const Institute = require('../../models/Institute');

module.exports={
    Institute_Last_Revision:{
        institute: root => Institute.findById(root.institute_id).then(doc=>doc)
            .catch(error=>{throw new Error(`Error at fetching data from DB.File: ${__dirname}. Error: ${error}`)})
    }
};
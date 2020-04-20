const ClinicalRecord = require('../../models/Clinical_Record');

module.exports={
    Query: {
        clinical_records: () => ClinicalRecord.find()
            .then(doc=>doc).catch(error=>{throw new Error('Error al obtener los registros clinicos')})
    }
};
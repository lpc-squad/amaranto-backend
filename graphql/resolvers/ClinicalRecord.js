const ClinicalRecord = require('../../models/Clinical_Record');

module.exports={
    Query: {
        clinical_records: () => ClinicalRecord.find()
    }
};
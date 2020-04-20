const Patient = require('../../models/Patient');

module.exports={
    Query: {
        patients: () => Patient.find()
            .then(patients=> patients)
            .catch(error=>{throw new Error(`Error at fetching data from DB.: File: ${__dirname}. Error:${error}`)})
        ,
        patientsFromInstitute: (_,{institute_id})=> Patient.find({"institute_last_revision.institute_id":institute_id})
                .then(patients=> patients)
                .catch(error=>{throw new Error(`Error at fetching data from DB.: File: ${__dirname}. Error:${error}`)})
        
    },
    Mutation: {
        addPatient: (_,{input}) => {
            let patient = new Patient({
                ...input
            });
            patient.save().catch(error=>{throw new Error(`Error at saving data from DB.: File: ${__dirname}. Error:${error}`)})
            return patient;
        }
    }
};
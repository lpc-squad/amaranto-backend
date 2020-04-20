const Patient = require('../../models/Patient');

module.exports={
    Query: {
        patients: () => Patient.find()
            .then(patients=> patients)
            .catch(error=>{throw new Error(`Error al buscar todos los pacientes: File: ${__dirname}. Error:${error}`)})
        ,
        patientsFromInstitute: (_,{institute_id})=> Patient.find({"institute_last_revision.institute_id":institute_id})
                .then(patients=> patients)
                .catch(error=>{throw new Error(`Error al buscar todos los pacientes: File: ${__dirname}. Error:${error}`)})
        
    }
};
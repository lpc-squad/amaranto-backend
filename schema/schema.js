const graphql = require('graphql');
const { GraphQLDate } = require('graphql-iso-date');
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLSchema,GraphQLID,GraphQLList } = graphql;
const Patient = require('../models/patient');
const Doctor = require('../models/doctor');
const Institute = require('../models/institute');
const User = require('../models/user');
const ClinicalRecord = require('../models/clinical_record');

const DoctorType = new GraphQLObjectType({
    name: "Doctors",
    fields: () => ({
        "_id":{type: GraphQLID},
        "medical_license_plate": {type: GraphQLString},
        "speciality_description": {type: GraphQLString},
        "institute_id": {
            type: InstituteType,
            resolve(parent,args){
                return "asd" //aca buscar al instituto
            }
        },
        "user_id": {
            type: UserType,
            resolve(parent,args){
                return doctors //aca buscar al usuario del doctor
            }
        },
        "registered_date": {type:GraphQLDate}
    })
});

const PatientType = new GraphQLObjectType({
    name: "Patients",
    fields: () => ({
        "_id": {type: GraphQLID},
        "profession": {type: GraphQLString},
        "family_nucleus": {type: GraphQLString},
        "background": {type: GraphQLString},
        "important_info":{type: GraphQLString},
        "user_id": {
            type: UserType,
            resolve(parent,args){
                return "test"//aca buscar al usuario del paciente
            }
        },
        "registered_date": {type: GraphQLDate}/*,
        "institute_details":{
            type: new GraphQLList(InstituteDetailsType)
        },
        "coverage":{
            type: new GraphQLList(ConverageType)
        }*/
    })
});

const InstituteDetailsType = new GraphQLObjectType({
    name: "Institute_details",
    fields: () => ({
        "_id": {type: GraphQLID},
        "_last_revision": {type: GraphQLDate},
        "institute_id":{type:GraphQLString}
    })
});

const UserType = new GraphQLObjectType({
    name: "Users",
    fields: () => ({
        "_id": {type: GraphQLID},
        "username": {type: GraphQLString},
        "password": {type: GraphQLString},
        "enabled": {type: GraphQLBoolean},
        "first_name":{type: GraphQLString},
        "last_name": {type: GraphQLString},
        "genre": {type: GraphQLString},
        "birth_date":{type: GraphQLDate},
        "phone":{type:GraphQLString},
        /*identification_type":{
            type: new GraphQLList(IdentificationType)
        },*/
        "address": {type: GraphQLString},
        "_verified":{type: GraphQLBoolean}
    })
});

const IdentificationType= new GraphQLObjectType({
    name: "Identification_type",
    fields: () => ({
        "_id":{type: GraphQLString},
        "identification_type_description": {type:GraphQLString},
        "identification_type_num": {type: GraphQLString}
    })
});

const InstituteType = new GraphQLObjectType({
    name: "Institutes",
    fields: () => ({
        "_id": {type:GraphQLID},
        "institute_name": {type: GraphQLString}
    })
});

const ClinicalRecordType = new GraphQLObjectType({
    name: "Clinical_Records",
    fields: () => ({
        "_id": {type: GraphQLID},
        "doctor_id": {
            type: DoctorType,
            resolve(parent,args){
                return "test" //aca devolver al doctor de su coleccion
            }
        },
        "patient_id": {
            type: PatientType,
            resolve(parent,args){
                return "test" //aca devolver al paciente de su coleccion
            }
        },
        "indications": {type: GraphQLString},
        "_createdAt": {type: GraphQLDate},
        "diagnosis": {type: GraphQLString},
        "must_have": {type: GraphQLString}
    })
});

const CoverageType = new GraphQLObjectType({
    name: "Coverage",
    fields: ()=>({
        "_id": {type: GraphQLID},
        "coverage_name": {type:GraphQLString},
        "plan": {type: GraphQLString},
        "coverage_num": {type: GraphQLString}
    })
});


const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields:{
        patients:{
            type: new GraphQLList(PatientType),
            resolve(parent,args){
                console.log("patients!")
                return "patients"
            }
        },
        doctors:{
            type: new GraphQLList(DoctorType),
            resolve(parent,args){
                console.log("doctors!");
                return "someone coll de doctor?"
            }
        },
        clinical_records:{
            type: new GraphQLList(ClinicalRecordType),
            resolve(parent,args){
                console.log("ClinicalRecords");
                return "all de cr";
            }
        }

    }
});

const Mutation= new GraphQLObjectType({
    name: "Mutation",
    fields:{
        //Patients
        //Doctors
        //Clinical Records
        addClinicalRecord:{
            type: ClinicalRecordType,
            args:{
                doctor_id: {type: GraphQLID},
                patient_id:{type:GraphQLID},
                indications:{type:GraphQLString},
                diagnosis:{type:GraphQLString},
                must_have: {type:GraphQLString}
            },
            resolve(parent,args){
                let cr= new ClinicalRecord({
                    doctor_id:args.doctor_id,
                    patient_id: args.patient_id,
                    indications: args.indications,
                    _createdAt: new Date(),
                    diagnosis: args.diagnosis,
                    must_have: args.must_have
                });
                cr.save();
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
}); 
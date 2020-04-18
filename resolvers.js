const User = require('./models/User');
const Institute = require('./models/Institute');
const ClinicalRecord = require('./models/Clinical_Record');
const Doctor = require('./models/Doctor');
const Patient = require('./models/Patient');

const Kind = require('graphql/language');
const { GraphQLScalarType }= require('graphql');
const dayjs = require('dayjs');
const {DateTimeResolver}=require('graphql-scalars');

function getAllDocuments(model){
  return model.find({}, (error,doc) => {
    if(error){throw new Error(error)};
  });
};

const resolvers = {
  Query: {
    users: () => {
      return getAllDocuments(User);
    },
    institutes: () => {
      return getAllDocuments(Institute);
    },
    clinical_records: () => {
      return getAllDocuments(ClinicalRecord);
    },
    doctors: () => {
      return getAllDocuments(Doctor);
    },
    patients: () => {
      return getAllDocuments(Patient);
    }
  },
  Mutation:{
    addUser: (_,args) =>{
      let user= new User({
        ...args
      });
      user.save(function(error,_){
        if(error){return error}
      });
      return user
    }
  },
  Date: DateTimeResolver
};

module.exports = resolvers;

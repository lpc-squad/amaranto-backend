const Doctor = require('../../models/Doctor');
const User = require('../../models/User');
const Institute = require('../../models/Institute');

module.exports={
    Query: {
        doctors: () => Doctor.find()
    },
    Doctor:{
        user:  root => {
            //console.log(`El papu es ${root} y su id es ${root.user_id}`)
            return User.findById(root.user_id)
            .then(doc=> doc)
            .catch(error=> {throw new Error(`Fetching data error: ${error}`)})}
        ,
        institutes: root => Institute.find({institute_id:{$in:root.institute_id}})
            .then(docs=>docs)
            .catch(error=> {throw new Error(`Fetching data error: ${error}`)})
    }
};
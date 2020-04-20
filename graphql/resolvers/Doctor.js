const Doctor = require('../../models/Doctor');
const User = require('../../models/User')

module.exports={
    Query: {
        doctors: () => Doctor.find()
    },
    Doctor:{
        user_id: (root) => {
            console.log( {first_name: `soy el usuario ${root.user_id}`})
            return {first_name: `soy el usuario ${root.user_id}`};
            //return User.findById(root.user_id).then(doc=> console.log(`Documento: ${doc}`));
        }
    }
};
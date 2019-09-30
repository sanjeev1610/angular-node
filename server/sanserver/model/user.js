const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');


//create user schema
const userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

//Enncrypt Password using bcrypt
userSchema.methods.encryptPwd = (password)=>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
}

//validate password using bcrypt
userSchema.methods.validPassword = (password, hash)=>{
    return bcrypt.compareSync(password, hash);
}


//export User Schema
module.exports = mongoose.model('User', userSchema);
// module.exports = mongoose.model('User', userSchema, 'users');




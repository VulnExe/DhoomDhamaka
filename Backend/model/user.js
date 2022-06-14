const Joi = require('joi');
const jwt = require('jsonwebtoken')
const config = require('config')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        minlength : 5,
        maxlength : 20
    },
    email : {
        type : String,
        required : true,
        minlength : 5,
        maxlength : 200,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minlength : 5,
        maxlength : 1024,
    }
},{
    timestamps:true
})

userSchema.methods.generateAuthToken = function(){
      const token = jwt.sign({ _id: this._id, username: this.username, email: this.email}, config.get('jwtPrivateKey'))
        return token;
}

const User = mongoose.model('User', userSchema)

const validateUser = (user) => {
    const schema = Joi.object({
        username: Joi.string().min(5).max(20).required(),
        email: Joi.string().min(5).max(200).required().email(),
        password: Joi.string().min(5).max(1024).required(),
      });
    
      return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser
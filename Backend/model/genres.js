const Joi = require('joi');
const mongoose = require('mongoose')

// const genreSchema = 

const Genre = mongoose.model('Genre', new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 5,
        maxlength : 20
    }
}))

const validateGenre = (genre) => {
    const schema = Joi.object({
        genre: Joi.string().min(4).required(),
      });
    
      return schema.validate(genre);
}

module.exports = Genre;
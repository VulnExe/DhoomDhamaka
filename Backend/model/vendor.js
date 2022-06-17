const Joi = require('joi');
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')


const vendorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 5,
        maxlength : 100
    },
    type:{
        type : String,
        required : true,
        minlength : 5,
        maxlength : 100
    },
    city:{
        type : String,
        required : true,
        minlength : 5,
        maxlength : 30
    },
    area:{
        type : String,
        required : true,
        minlength : 5,
        maxlength : 100
    },
    phone:{
        type : String,
        required : true,
        minlength : 5,
        maxlength : 100
    },
    email : {
        type : String,
        required : true,
        minlength : 5,
        maxlength : 200,
        unique : true
    },
    
},{
    timestamps:true
})

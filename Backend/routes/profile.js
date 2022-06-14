const jwt = require('jsonwebtoken')
const config = require('config')
const express = require('express')
const router = express.Router()
const { User} = require('../model/user')
const auth = require('../middleware/auth')

router.get("/",auth , (req,res) => {
    console.log("profile received");
    const userDetails = req.user
    console.log(userDetails);
    res.json(userDetails)
})

module.exports = router;
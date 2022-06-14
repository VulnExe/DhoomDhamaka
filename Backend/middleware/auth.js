const config = require('config')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

function auth(req, res, next){
    const token = req.cookies.Token
    const jwtPrivateKey = process.env.jwtPrivateKey

    if(!token) res.status(400).send('Accesss Denied. No Token Provided')

    try{

        const decoded = jwt.verify(token, jwtPrivateKey);
        req.user = decoded;
        next()
    }
    catch (ex){
         res.status(400).send('Invalid Token')
    }

}

module.exports = auth;
const jwt = require('jsonwebtoken')
const config = require('config')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const Joi = require('joi')
const _ = require('lodash')
const { User} = require('../model/user')

router.get("/", (req,res) => {
  const tok = req.cookies.Token
  console.log("myToken : " + tok);
})

router.post("/", async (req, res) => {
    console.log(req.body);
    const {error} = validate(req.body)

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let user = await User.findOne({email : req.body.email})
  if (!user) return res.status(400).send('Invalid email or password.')

   const validPassword = await bcrypt.compare(req.body.password, user.password)

   if(!validPassword) return res.status(400).send('Invalid email or password.')

  // const token = jwt.sign({ _id: user._id}, config.get('jwtPrivateKey'))

  const token = user.generateAuthToken();

  const foundUser = _.pick(user, ["_id", "username", "email"]);
  console.log(token);
  res
    // .cookie("Token", token, {expires: new Date(Date.now() + 10000), httpOnly: true })
    .cookie("Token", token, {expires: new Date(Date.now() +  86400000), httpOnly: true })
    .send("cookie stted");
    
  
    // res.send(token)
});

//for logout

router.get("/logout", (req,res) => {
  res.clearCookie("Token").send("Logged Out")
})


const validate = (req) => {
    const schema = Joi.object({
        email: Joi.string().min(5).max(200).required().email(),
        password: Joi.string().min(5).max(1024).required(),
      });
    
      return schema.validate(req);
}

module.exports = router;
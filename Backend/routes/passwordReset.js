//requirements

const express = require("express");
const router = express.Router();
const crypto = require("node:crypto");
const nodemailer = require("nodemailer");
const { User } = require("../model/user");

//creatingbtransporting our mail nd pass nd service

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vasanthsurya470@gmail.com",
    pass: "uuynijqfkgxmyxkj",
  },
});

//get request handling

router.post("/", (req, res) => {

  //creating random digits using crypto

  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
    }

    //storing it in token and converting to str from hex
    console.log(req.body.email);
    const tokenReset = buffer.toString("hex");
    User.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        return res
          .status(422)
          .json({ error: "user doesn't exists with that email" });
      }
      //if user avail means assign values
      user.resetToken = tokenReset;
      user.expireToken = Date.now() + 360000;

      //saving this items and sending mail using nodemailer

      user.save().then((result) => {
        var emailCnt = {
          from: "no-reply@bandhan.com",
          to: user.email,
          subject: "Password Reset Mail @Bandhan",
          html: `<p>You requested for Password Reset</p>
          <h1><a href="http://localhost:3000/newPassword/${tokenReset}">click here </a>to reset password</h1>`,
        };
        transporter.sendMail(emailCnt, (error, info) => {
          if (error) {
            return console.log(error + "hii err");
          }
          console.log("Message sent: %s", info.messageId);
        });
      });
    });
  });
});


module.exports = router;
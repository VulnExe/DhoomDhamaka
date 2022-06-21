const register = require("../routes/register");
const login = require("../routes/login");
const profile = require("../routes/profile");
const home = require("../routes/home");
const newPassword = require("./../routes/newPassword");
const passwordReset = require("./../routes/passwordReset");
const becomeVendor = require("../routes/becomeVendor")
const imgupload = require('../routes/imgupload')

module.exports = function (app) {
  app.use("/api/register", register);
  app.use("/api/login", login);
  app.use("/api/passwordReset", passwordReset);
  app.use("/api/newPassword", newPassword);
  app.use("/api/becomeVendor", becomeVendor)
  app.use("/api/profile", profile);
  app.use("/api/home", home);
};

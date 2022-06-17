const register = require('../routes/register')
const login = require('../routes/login')
const profile = require('../routes/profile')
const auth = require('../middleware/auth');
const home = require("../routes/home")

module.exports = function(app){
    app.use('/api/register', register);
    app.use('/api/login', login);
    app.use('/api/profile', profile);
    app.use("/api/home",home)
}
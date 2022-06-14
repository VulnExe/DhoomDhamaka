const config = require('config')
require('dotenv').config()
const login = require('./routes/login')
const express = require("express");
const cors = require('cors')
const mongoose = require('mongoose')
const register = require('./routes/register')
const { urlencoded } = require("express");
const app = express();
const profile = require('./routes/profile')
const cookieParser = require('cookie-parser');
const auth = require('./middleware/auth');

if(!process.env.jwtPrivateKey ){
    console.error('FATAL ERROR: jwtprivateKey is not defined');
    process.exit(1)
}

// console.log(process.env);

app.use(cookieParser())
app.use(cors())
app.use(express.json());
app.use(urlencoded( {extended : true} ))

mongoose.connect('mongodb://localhost/cookies')
    .then(() => console.log("db connectede succesfully"))
    .catch( err => console.error('Could not connect to mongodb....', err))


// app.use(log)
// app.use(auth)
// app.use('/api/genre  s', genres)
app.use('/api/register', register)
app.use('/api/login', login)
app.use('/api/profile', profile)
// app.use('/', home)
// app.use(error)
  
app.get("/api/home", auth,(req,res) => {
    // console.log(req);
    console.log("homeeee");
    res.send("rec")
})

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`listening port on ${port}`));

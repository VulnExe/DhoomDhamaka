require('dotenv').config()
const express = require("express");
const cors = require('cors')
const { urlencoded } = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const auth = require('./middleware/auth');

//middlewares:
app.use(cookieParser())
app.use(cors())
app.use(express.json());
app.use(urlencoded( {extended : true} ))

  
require("./startups/db")();
require("./startups/config")();
require("./startups/routes")(app)

// app.get("/api/home", auth,(req,res) => {
//     console.log("homeeee");
//     res.send("rec")
// })


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listening port on ${port}`));

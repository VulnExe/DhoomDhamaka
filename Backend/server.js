const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie('name', 'GeeksForGeeks' , {httpOnly: true}).send('Cookie-Parser');
 });

const PORT = process.env.PORT || 4444;

app.listen(PORT, ()=> {
    console.log("server running on " + PORT);
})
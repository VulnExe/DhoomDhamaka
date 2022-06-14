const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router()

router.get('/', (req,res) => {
    // res.send("hello")
    console.log("dest");
})

module.exports = router;
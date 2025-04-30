const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const name = "John3";
    const age = 30;
    const address = "<h3>korat</h3>"
    res.render('index',{name:name,age:age,address:address});
})

module.exports = router;
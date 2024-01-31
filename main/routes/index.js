const express = require('express');

const router = express.Router();


// GET request to load index/home page
router.get('/', (req, res) => {
    res.render('index');
});




module.exports = router;
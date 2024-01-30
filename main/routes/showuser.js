const express = require('express');
const path = require("path");
const router = express.Router();

const userController= require('../controllers/userController')
const userModel = require("../models/userModel")

router.get('/', (req, res) => {
    res.render('showuser');
});



router.get('/:id', userController.getUser);

module.exports = router;
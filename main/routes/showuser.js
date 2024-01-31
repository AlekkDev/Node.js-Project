const express = require('express');
const path = require("path");
const router = express.Router();

const userController= require('../controllers/userController')
const userModel = require("../models/userModel")

router.get('/', (req, res) => {
    res.render('showuser');
});

router.get('showuser/:id/', (req, res) => {
    const user = userController.getUser(req, res);
    res.render('showuser', {user: user});
});

router.get('/:id', userController.getUser);

module.exports = router;
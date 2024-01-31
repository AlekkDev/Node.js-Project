const express = require('express');
const path = require("path");
const router = express.Router();

const userController= require('../controllers/userController')
const userModel = require("../models/userModel")

// router.get('/', (req, res) => {
//     res.render('showuser');
// });

// router.get('/:id', userController.getUser);
// router.get('/showuser/:id', userController.showUser);

router.get('/:id', (req, res) => {
    const user = userController.showUser(req.params.id); // Pass the user ID as a parameter
    // console.log("This is the showuser data: ", user);
    res.render('showuser', { user: user });
});


module.exports = router;
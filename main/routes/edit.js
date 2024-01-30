const express = require('express');
const path = require("path");
const router = express.Router();
const userController= require('../controllers/userController')
const userModel = require("../models/userModel")


router.get('/', userController.getUsers);



// router.get('/:id/edit', userController.getUser);
// router.get('/', (req, res) => {
//     res.send('Hello World! From the index.js router');
// });


// router.get('/', function (req, res) {
//     const fileName = 'views/edit.ejs';
//     const options = {
//         root: path.join(__dirname)
//     };
//     res.sendFile(fileName, options);
// });

router.get('/:id/edit', (req, res) => {
    const user = userController.getUser(req, res);
    res.render('edit', {user: user});
});
router.post('/:id', userController.editUserData);

module.exports = router;
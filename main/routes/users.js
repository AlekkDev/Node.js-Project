const express = require('express');
const path = require("path");
const router = express.Router();
const userController= require('../controllers/userController')

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/:id', userController.updateUserData);


// router.get('/', (req, res) => {
//     //some code that send back data about all users
//     console.log(req.params);
//     res.send('sending back info for user ' + req.params.id)
// });



//router.post('/users/:id', userController.updateUser);


// router.get('/', function (req, res) {
//     const fileName = 'index.html';
//     const options = {
//         root: path.join(__dirname)
//     };
//     res.sendFile(fileName, options);
// });

module.exports = router;


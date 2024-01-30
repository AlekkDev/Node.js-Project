const express = require('express');
// const path = require("path");
const router = express.Router();

const userController= require('../controllers/userController')
const userModel = require("../models/userModel")


router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/:id/delete', userController.deleteUser);

//router.post('/:id', userController.updateUserData);
//attempting to make adding new user data possible - Morgan
//the data received in this post request is in new.ejs, which is the form for creating a new user
let lastId= 3
router.post("/", (req, res) => {
    //bandaid fix for having an ID for the user, either have to iterate the users json in userModel.js for the next user.id, or can just make random IDs
    //with uuid module?
    console.log("The data being passed into POST request: ", req.body)
    const  id = ++lastId;
    const name = req.body.name;
    const color = req.body.favc;
    const newUser = userModel.updateUserData({id: id, name: name, color: color});
    res.send(newUser);
    console.log("Successfully added new user with following data: ", newUser);
});

//router.post("/", userController )

module.exports = router;




//router.post('/users/:id', userController.updateUser);


// router.get('/', function (req, res) {
//     const fileName = 'index.html';
//     const options = {
//         root: path.join(__dirname)
//     };
//     res.sendFile(fileName, options);
// });

// router.get('/', (req, res) => {
//     //some code that send back data about all users
//     console.log(req.params);
//     res.send('List of users' + req.params.id)
// });
// router.get('/new', (req, res) => {
//     //create a new user
//     res.send('New user')
// });
// router.post('/', (req, res) => {
//     //create a new user
//     res.send('Create a new user')
// });

// router.get("/user")
//

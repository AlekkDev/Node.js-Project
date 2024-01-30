const express = require("express");
const router = express.Router();
const userModel= require("../models/userModel");

function getUsers(req, res, next) {
    //some code that sends back data about all users
    const users= userModel.getUsers();
    res.render('users', {users})
}

function getUser(req, res, next) {
const user = userModel.getUser(parseInt(req.params.id));
// res.json(user);
return user;
}

function deleteUser(req, res, next) {
    const userId = parseInt(req.params.id);
    userModel.deleteUser(userId);
    console.log("Deleted user:", req.body)
    res.redirect('/users');
    next();
}



function editUserData(req, res, next) {
    const userId = parseInt(req.params.id);
    console.log("This is what you wrote to edit the user data: ", req.body)
    userModel.editUserData(req.body, userId)
    res.redirect('/users');
    res.send()
}



module.exports = {
    getUsers,
    getUser,
    deleteUser,
    editUserData
}
const express = require("express");

const userModel = require("../models/userModel");
//function that gets all users from the model function
function getUsers(req, res, next) {
    //some code that sends back data about all users
    const users = userModel.getUsers();
    res.render('users', {users})
}
// function that gets a single user from the model
function getUser(req, res, next) {
    const user = userModel.getUser(parseInt(req.params.id));
// res.json(user);
    return user;
}

//function that shows a single user from the model
function showUser(userId) {
    const user = userModel.getUser(userId);
    return user;
}
//function that calls the model to delete a user
function deleteUser(req, res, next) {
    const userId = parseInt(req.params.id);
    userModel.deleteUser(userId);
    console.log("Deleted user:", req.body)
    res.redirect('/users');
    next();
}

//function that calls the model to edit a user's data based on input from the edit form
function editUserData(req, res, next) {
    const userId = parseInt(req.params.id);
    console.log("This is what you wrote to edit the user data: ", req.body)
    userModel.editUserData(req.body, userId) //passes a json object with keys name and favc as the data, and userID as the id
    res.redirect('/users');
    res.send()
}


module.exports = {
    getUsers,
    getUser,
    deleteUser,
    editUserData,
    showUser
}
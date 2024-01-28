
const userModel= require("../models/userModel");

function getUsers(req, res, next) {
    //some code that sends back data about all users
    const users= userModel.getUsers();
    res.render('users', {users})
}

function getUser(req, res, next) {
const user = userModel.getUser(parseInt(req.params.id));
res.json(user);
}


function updateUserData(req, res, next) {
    //some code that updates a user
    userModel.updateUserData(req.body, req.params.id)
    res.send()
}

module.exports = {
    getUsers,
    getUser,
    updateUserData
}
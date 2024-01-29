
//hardcoded users

const users= [
    {
        id: 1,
        name: 'enci',
        favecolor: 'yellow'
    },
    {
        id: 2,
        name: 'alek',
        favecolor: 'green'
    },
    {
        id: 3,
        name: 'morgan',
        favecolor: 'blue'
    }
]

//sends all user info
function getUsers(){
    return users;
}

//sends 1 user
function getUser(id){
    let user = users.find(element=> element.id === parseInt(id))
    if(typeof user === 'undefined') {
        return {error: 'user not found'};
    }else{
            return user;
        }
    }

//this function will work for EDITING user data with a few modifications, but not for creating a new user, see below
// function updateUserData(data, id){
//     let user = users.find(element=> element.id === id)
//     user.name= data.name;
//     user.favecolor= data.favecolor;
//     return user;
// }

//function for creating/adding new user
function updateUserData(data) {
    let user = {id: data.id, name: data.name, favecolor: data.color};
    users.push(user);
    return user;
}

module.exports = {
    getUsers,
    getUser,
    updateUserData
}
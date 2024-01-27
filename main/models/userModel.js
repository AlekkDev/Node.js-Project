
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
        favecolor: 'green',
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
    let user = users.find(element=> element.id== id)
    return user;
}
function updateUserData(data, id){
    let user = users.find(element=> element.id== id)
    user.name= data.name;
    user.favecolor= data.favecolor;
    return user;
}

module.exports = {
    getUsers,
    getUser,
    updateUserData
}
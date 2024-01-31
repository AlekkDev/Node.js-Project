
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

//function to retrieve all users
function getUsers(){
    return users;
}

//function to retrieve a user by id, if the user is not found, an error message is returned
function getUser(id){
    let user = users.find(element=> element.id === parseInt(id))
    if(typeof user === 'undefined') {
        return {error: 'user not found'};
    }else{
            return user;
        }
    }

// edit user data function - takes in data and id, finds the user with the id and changes the name and favecolor
function editUserData(data, id){
    let user = users.find(element=> element.id === id)
    user.name= data.name;
    user.favecolor= data.favc;
    return user;
}

//function for creating/adding new user, user is defined with the properties of the data parameter which is an object
//the user is then pushed into our array of users and returned so that we can display what happens in the console from the other files
function updateUserData(data) {
    let user = {id: data.id, name: data.name, favecolor: data.color};
    users.push(user);
    return user;
}

//function for deleting user, findIndex method will return -1 if no user.id === userId, otherwise it will 
//return the index of the user and remove it from the array
function deleteUser(userId){
    const num= users.findIndex(user => user.id === userId)
    if (num !== -1) {
        users.splice(num, 1);
    }
}



// export all functions so that they can be used in other files
module.exports = {
    getUsers,
    getUser,
    updateUserData,
    deleteUser,
    editUserData
}
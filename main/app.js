const http = require('http');
const express = require('express');
const ejs= require('ejs')
const path = require('path');
//this is required to parse URL encoded data which we receive in the POST request on the user creation form
const bodyParser = require("body-parser");
const app = express();
const port = 3000;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));
app.use(express.static('views'));



// ROUTING - telling the app what to do when receiving a request to URL
const indexRouter = require('./routes/index');
const newRouter = require('./routes/new');
const editRouter = require('./routes/edit');
const usersRouter = require('./routes/users');
const showRouter = require("./routes/showuser");

// here we tell the app to use the routes we imported
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/new', newRouter);
app.use('/users', editRouter);
app.use('/users/showuser', showRouter);





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

//app.use(express.static(path.join(__dirname, 'public')));



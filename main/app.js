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

const indexRouter = require('./routes/index');
const showRouter = require('./routes/show');
const newRouter = require('./routes/new');
const editRouter = require('./routes/edit');
const usersRouter = require('./routes/users');


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/show', showRouter);
app.use('/new', newRouter);
app.use('/edit', editRouter);

//trying to figure out why the last 3 routers are not working by making a new test one below
const testRouter = require("./routes/test");
app.use("/test", testRouter);
//problem was in the router files, router.get("/", etc) first parameter should always be /, not /users or /show etc
//that wasnt working before because something was incorrectly set up in this file but I forgot what it was



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

//app.use(express.static(path.join(__dirname, 'public')));



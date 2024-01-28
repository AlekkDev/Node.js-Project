const http = require('http');
const express = require('express');
const ejs= require('ejs')
const path = require('path');
const app = express();
const port = 3000;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')


const indexRouter = require('./routes/index');
const showRouter = require('./routes/show');
const newRouter = require('./routes/new');
const editRouter = require('./routes/edit');
const usersRouter = require('./routes/users');


app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/show', showRouter);
// app.use('/new', newRouter);
// app.use('/edit', editRouter);
// app.use('/users', usersRouter);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
app.use(express.static('public'));


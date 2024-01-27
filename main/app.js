const http = require('http');
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const ejs= require('ejs')


const indexRouter = require('./routes/index');
const showRouter = require('./routes/show');
const newRouter = require('./routes/new');
const editRouter = require('./routes/edit');
const usersRouter = require('./routes/users');


app.use('/index', indexRouter);
app.use('/show', showRouter);
app.use('/new', newRouter);
app.use('/edit', editRouter);
app.use('/users', usersRouter);


// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     const fs = require('fs');
//     fs.readFile('helloworld.html', (err, data) => {
//         res.end(data);
//     });
// });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
app.use(express.static('public'));


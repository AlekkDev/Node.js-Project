const http = require('http');
const express = require('express');
const app = express();
const port = 3000;
// const path = require('path');

const indexRouter = require('./routes/index');
const showRouter = require('./routes/show');
const newRouter = require('./routes/new');
const editRouter = require('./routes/edit');
// const usersRouter = require('./routes/users');


app.use('/', indexRouter);
app.use('/show', showRouter);
app.use('/new', newRouter);
app.use('/edit', editRouter);

// app.use('/users', usersRouter);


// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     const fs = require('fs');
//     fs.readFile('helloworld.html', (err, data) => {
//         res.end(data);
//     });
// });


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
app.use(express.static('public'));


// app.get('/', function (req, res) {
// res.send('Hello World!')
// })
// app.post('/', function (req, res) {
// res.send('Got a POST request')
// })
// app.put('/user', function (req, res) {
// res.send('Got a PUT request at /user')
// })
// app.delete('/user', function (req, res) {
// res.send('Got a DELETE request at /user')
// })
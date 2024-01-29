const express = require('express');
const path = require("path");
const router = express.Router();
// router.get('/', (req, res) => {
//     res.send('Hello World! From the index.js router');
// });


// router.get('/', function (req, res) {
//     const fileName = 'views/users.ejs';
//     const options = {
//         root: path.join(__dirname)
//     };
//     res.sendFile(fileName, options);
// });

router.get('/users', (req, res) => {
    res.render('users');
});

module.exports = router;
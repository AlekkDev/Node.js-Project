const express = require('express');
const path = require("path");
const router = express.Router();
// router.get('/', (req, res) => {
//     res.send('Hello World! From the index.js router');
// });


// router.get('/', function (req, res) {
//     const fileName = 'views/new.ejs';
//     const options = {
//         root: path.join(__dirname)
//     };
//     res.sendFile(fileName, options);
// });

router.get('/', (req, res) => {
    res.render('new');
});


module.exports = router;
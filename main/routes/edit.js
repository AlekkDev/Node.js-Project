const express = require('express');
const path = require("path");
const router = express.Router();
// router.get('/', (req, res) => {
//     res.send('Hello World! From the index.js router');
// });


router.get('/', function (req, res) {
    const fileName = 'edit.html';
    const options = {
        root: path.join(__dirname)
    };
    res.sendFile(fileName, options);
});

module.exports = router;
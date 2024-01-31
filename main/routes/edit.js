const express = require('express');

const router = express.Router();
const userController= require('../controllers/userController')



router.get('/', userController.getUsers);

// route to edit a user of a given id
router.get('/:id/edit', (req, res) => {
    const user = userController.getUser(req, res);
    res.render('edit', {user: user});
});
// post route to delete a user of a given id
router.post('/:id', userController.editUserData);

module.exports = router;
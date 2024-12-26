const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Router to list users
router.get('/', usersController.list);

// Router to get a user by id
router.get('/:id', usersController.getById);

// Router to create a new user
router.post('/', usersController.create);

// Router to update a user by id
router.put('/:id', usersController.update);

// Router to delete a user by id
router.delete('/:id', usersController.delete);

module.exports = router;
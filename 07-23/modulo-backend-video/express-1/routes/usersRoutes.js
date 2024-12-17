const express = require('express');
const usersController = require('../controllers/usersController');
const usersRoutes = express.Router();

const usersController = new usersController();

// CRUD
usersRoutes.get('/users', usersController.listar);

usersRoutes.post('/users', usersController.criar);

usersRoutes.put('/users/:id', usersController.atualizar);

usersRoutes.delete('/users/:id', usersController.deletar);


module.exports = usersRoutes;
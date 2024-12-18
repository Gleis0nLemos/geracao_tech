const express = require('express');
const UsersController = require('../controllers/usersController');
const usersRoutes = express.Router();

const usersController = new UsersController();

// CRUD
usersRoutes.get('/users', usersController.listar);

usersRoutes.get('/users/:id', usersController.consultarPorId);

usersRoutes.post('/users', usersController.criar);

usersRoutes.put('/users/:id', usersController.atualizar);

usersRoutes.delete('/users/:id', usersController.deletar);


module.exports = usersRoutes;
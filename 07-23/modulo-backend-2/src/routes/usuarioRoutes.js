const express = require('express');  
const router = express.Router();  
const usuarioController = require('../controllers/usuarioController');  

// Rota para listar usuários  
router.get('/', usuarioController.listar);  

// Rota para consultar um usuário por ID  
router.get('/:id', usuarioController.consultarPorId);  

// Rota para criar um novo usuário  
router.post('/', usuarioController.criar);  

// Rota para atualizar um usuário existente  
router.put('/:id', usuarioController.atualizar);  

// Rota para excluir um usuário  
router.delete('/:id', usuarioController.excluir);  

module.exports = router;
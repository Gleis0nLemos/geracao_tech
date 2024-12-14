const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Rota para listar produtos
router.get('/', produtoController.listar);

// Rota para adicionar um novo produto
router.post('/', produtoController.adicionar);

// Rota para editar um produto existente
router.put('/:id', produtoController.editar);

// Rota para listar produtos
router.delete('/:id', produtoController.excluir);

module.exports = router;
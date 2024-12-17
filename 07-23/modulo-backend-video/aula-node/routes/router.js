const produto = require("./produtos");
const usuarios = require('./usuarios')

const rotas = {
  '/produtos': {
    'GET': () => produto.listar(),
    'POST': (id, nome, valor) => produto.adicionar(id, nome, valor),
    'PUT': (id, nome, valor) => produto.editar(id, nome, valor),
    'DELETE': (indice) => produto.excluir(indice),
  },
  '/usuarios': {
    'GET': () => usuarios.listar(),
    'POST': (id, nome, login) => usuarios.adicionar(id, nome, login),
    'PUT': (id, nome, login) => usuarios.editar(id, nome, login),
    'DELETE': (indice) => usuarios.excluir(indice),
  },
};

module.exports = rotas;

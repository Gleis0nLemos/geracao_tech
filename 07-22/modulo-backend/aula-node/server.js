const http = require('http');
const Produto = require('./produtos.js');

const server = http.createServer((req, res) => {
  const { url, method } = req;
  
  if (url === '/') {
    res.statusCode = 200;
    res.end('Servidor Node.js');  

  } else if (url === '/produtos') {
    res.statusCode = 200;
    res.end(Produto.listarProdutos()); 

  } else if (url === '/produtos/adicionar') {
    const novoProduto = new Produto(3, 'Monitor', 800);

    res.statusCode = 201;
    res.end(Produto.adicionarProduto(novoProduto))

  } else if (url === '/produtos/remover') {
    res.statusCode = 200;
    res.end(Produto.removerProduto())

  } else {
    res.statusCode = 404;
    res.end('Página não encontrada');
  }
})

const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server runnig at http://${hostname}:${port}/`);
})
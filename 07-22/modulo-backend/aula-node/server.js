const http = require('http');
const Produto = require('./produtos.js');

const server = http.createServer((req, res) => {
  const { url, method } = req;
  res.setHeader('Content-Type', 'application/json');
  
  if (url === '/produtos' && method === 'GET') {
    res.statusCode = 200;
    res.end(Produto.listarProdutos()); 

  } else if (url === '/produtos/' && method === 'POST') {
    const novoProduto = Produto.adicionarProduto({
      id: 3,
      nome: 'Mouse',
      valor: 50
    })

    res.statusCode = 201;
    res.end(novoProduto);

  } else if (url.match(/\produtos\/\d+/) && method === 'PUT') {
    const id = parseInt(url.split('/')[2]);

    Produto.editarProduto(id, { 
      nome: 'Teclado Mecânico', 
      valor: 200 
    });

    res.statusCode = 200;
    res.end('Produto editado com sucesso')

  } else if (url.match(/\produtos\/\d+/) && method === 'DELETE') {
    const id = parseInt((url.split('/')[2]));

    Produto.removerProduto(id)
    res.statusCode = 200;
    res.end('Produto removido com sucesso')

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
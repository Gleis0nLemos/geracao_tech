const { createServer } = require('node:http')
const Produto = require('./routes/produtos');

const host = 'localhost';
const port = 3000;

// http://localhost:3000/
const app = createServer((request, response) => {
  const { url, method } = request;

  console.log('URL: ', url)
  console.log('Método/Verbo: ', method)

  if (url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/plain'})
    return response.end("Olá NodeJS. Servidor Ok.");
  } 
  
  else if (url === '/produtos') {
    const dados = Produto.listar();

    response.writeHead(200, { 'Content-Type': 'application/json'})
    return response.end(JSON.stringify(dados));
  } 
  
  else if (url === '/produtos/adicionar') {
    Produto.adicionar(4, 'Monitor', 3330.00);
    response.writeHead(201, { 'Content-Type': 'text/plain'})
    return response.end('Produto Adicionado com sucesso.');
  } 
  
  else if (url === '/produtos/editar') {
    response.writeHead(200, { 'Content-Type': 'text/plain'})
    return response.end(editarProduto());

  } 
  
  else if (url === '/produtos/remover') {
    Produto.excluir(0);
    response.writeHead(200, {'Content-Type': 'text/plain'})
    return response.end('Produto removido com sucesso.');
  } 
  
  else {
    response.writeHead(404, { 'Content-Type': 'text/plain'})
    return response.end("Página não encontrada. - Not Found");
  }
})

app.listen(port, host, () => {
  console.log(`Servidor NodeJs executando http://${host}:${port}`)
})
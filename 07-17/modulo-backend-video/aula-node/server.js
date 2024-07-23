const { createServer } = require('node:http')
const { listarProdutos, adicionarProduto, removerProduto, editarProduto } = require('./routes/produtos');

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
  } else if (url === '/produtos') {
    const dados = listarProdutos();

    response.writeHead(200, { 'Content-Type': 'application/json'})
    return response.end(JSON.stringify(dados));
  } else if (url === '/produtos/adicionar') {
    response.writeHead(201, { 'Content-Type': 'text/plain'})
    return response.end(adicionarProduto());
  } else if (url === '/produtos/editar') {
    response.writeHead(201, { 'Content-Type': 'text/plain'})
    return response.end(editarProduto());
  } else if (url === '/produtos/remover') {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    return response.end(removerProduto());
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain'})
    return response.end("Página não encontrada. - Not Found");
  }
})

app.listen(port, host, () => {
  console.log(`Servidor NodeJs executando http://${host}:${port}`)
})
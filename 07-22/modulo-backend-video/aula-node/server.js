const { createServer } = require('node:http')
const rotas = require('./routes/router')

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
  
  if (!rotas[url] || !rotas[url][method]) {
    response.writeHead(404, { 'Content-Type': 'text/plain'})
    return response.end("Página não encontrada. - Not Found");
  }
  
  const dados = rotas[url][method];
  response.writeHead(200, { 'Content-Type': 'application/json'});
  return response.end(JSON.stringify(dados));
})

app.listen(port, host, () => {
  console.log(`Servidor NodeJs executando http://${host}:${port}`)
})
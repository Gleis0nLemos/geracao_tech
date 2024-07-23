const { createServer } = require('node:http')

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
  
  if (url === '/produtos') {
    response.writeHead(200, { 'Content-Type': 'text/plain'})
    return response.end("Listagem de Produtos.");
  }
  
  response.writeHead(404, { 'Content-Type': 'text/plain'})
  return response.end("Página não encontrada. - Not Found");
})

app.listen(port, host, () => {
  console.log(`Servidor NodeJs executando http://${host}:${port}`)
})
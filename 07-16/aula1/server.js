const http = require('http');
const hostname = '127.0.0.1';
const port =  3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; // Código de status HTTP 200 (OK)
  res.setHeader('Content-Type', 'text/html'); // Definindo o tipo de conteúdo como HTML
  res.end('Olá, mundo!\n'); // enviando a resposta
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})
const url = require('url');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  console.log('Requisição recebida');
  console.log(`Método: ${req.method}`);
  console.log(`URL: ${req.url}`)
  console.log(`Parâmetros; ${JSON.stringify(parsedUrl.query)}`);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Olá, mundo!\n');
})

server.listen(port, hostname, () => {
  console.log(`Servidor is running at http://${hostname}:${port}`);
})
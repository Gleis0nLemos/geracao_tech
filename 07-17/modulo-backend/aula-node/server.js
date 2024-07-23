const http =  require('http');

const server = http.createServer((req, res) => {
  const { url, method } = req;
  
  if (url === '/' && method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Servidor Node.js');  
  } else if (url === '/produtos' && method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Listagem de Produtos');  
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Página não encontrada');
  }
})

const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server runnig at http://${hostname}:${port}/`);
})
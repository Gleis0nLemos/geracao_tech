const { createServer } = require('node:http')
const host = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  console.log("Método/Verbos: " + req.method);
  console.log("URL: " + req.url);


  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(('<h1>Hello World!</h1> <br> Aula de Backend'))
})

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${3000}`);
})
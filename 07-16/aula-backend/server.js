const url = require('url');
const http = require('http');
const hostname = '127.0.0.1';
const port =  3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;

  res.statusCode = 200; // Código de status HTTP 200 (OK)
  res.setHeader('Content-Type', 'text/html'); // Definindo o tipo de conteúdo como HTML
  res.end(`
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>Servidor Node.js</title>      
      </head>

      <body>
        <h1>Olá, ${query.nome || 'mundo'}!</h1>
        <p>Este é um servidor Node.js</p>
      </body>
    </html>
    `); // enviando a resposta
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})
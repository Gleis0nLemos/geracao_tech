const { createServer } = require('node:http');
const Produto = require('./routes/produtos');
const rotas = require('./routes/router');

const host = 'localhost';
const port = 3000;

// Função auxiliar para capturar os dados do corpo da requisição
const getRequestData = (request) => {
  return new Promise((resolve, reject) => {
    let body = '';
    request.on('data', (chunk) => {
      body += chunk.toString();
    });
    request.on('end', () => {
      resolve(body);
    });
    request.on('error', (err) => {
      reject(err);
    });
  });
};

// http://localhost:3000/
const app = createServer(async (request, response) => {
  const { url, method } = request;

  console.log('URL: ', url);
  console.log('Método/Verbo: ', method);

  if (url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    return response.end("Olá NodeJS. Servidor Ok.");
  }

  const [path, query] = url.split('?');
  const queryParams = new URLSearchParams(query);

  if (!rotas[path] || !rotas[path][method]) {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    return response.end("Página não encontrada. - Not Found");
  }

  if (method === 'POST' || method === 'PUT') {
    const body = await getRequestData(request);
    const { id, nome, valor } = JSON.parse(body);
    const dados = rotas[path][method](id, nome, valor);
    response.writeHead(200, { 'Content-Type': 'application/json' });
    return response.end(JSON.stringify(dados));
  } else if (method === 'DELETE') {
    const indice = queryParams.get('indice');
    if (!indice) {
      response.writeHead(400, { 'Content-Type': 'text/plain' });
      return response.end("Índice não fornecido");
    }
    const dados = rotas[path][method](parseInt(indice));
    response.writeHead(200, { 'Content-Type': 'application/json' });
    return response.end(JSON.stringify(dados));
  } else {
    const dados = rotas[path][method]();
    response.writeHead(200, { 'Content-Type': 'application/json' });
    return response.end(JSON.stringify(dados));
  }
});

app.listen(port, host, () => {
  console.log(`Servidor NodeJs executando http://${host}:${port}`);
});

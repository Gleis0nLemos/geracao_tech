// const { createServer } = require(('node:http'));

// const app = createServer((request, response) => {
  
//   if (request.method === 'GET' && request.url === '/') {
//     response.writeHead(200, { 'Content-Type': 'text/plain' })
//     return response.end("Página Inicial");
//   }

//   if (request.method === 'GET' && request.url === '/posts') {
//     response.writeHead(200, { 'Content-Type': 'text/html' })
//     return response.end("<h1>Posts</h1>");
//   }

//   response.writeHead(404, { 'Content-Type': 'text/plain' })
//   return response.end("Página não encontrada");
// })

const express = require('express');

const port = 3000;
const host = 'localhost';

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  response.send("Página Inicial");
})

const listaUsuarios = [
  { id: 1, nome: 'João' },
  { id: 2, nome: 'Maria' },
  { id: 3, nome: 'Pedro' },
];

app.get('/users', (request, response) => {
  return response.json(listaUsuarios);
})

app.post('/users', (request, response) => {
  const dados = request.body;
  listaUsuarios.push(dados);
  return response.json({
    message: 'Usuário criado com sucesso',
  })
})

app.put('/users/:id', (request, response) => {
  const id = request.params.id;
  const dados = request.body;
  const index = listaUsuarios.findIndex(user => user.id == id);
  listaUsuarios[index] = (dados);
  return response.json({
    message: 'Usuário atualizado com sucesso',
  })
})

app.delete('/users/:id', (request, response) => {
  const id = request.params.id;
  const index = listaUsuarios.findIndex(user => user.id == id);
  listaUsuarios.splice(index, 1);
  return response.json({
    message: 'Usuário atualizado com sucesso',
  })
})



app.listen(port, host, () => {
  console.log("Servidor executando na http://localhost:3000")
})
const { createServer } = require('node:http')

const host = 'localhost';
const port = 3000;

const app = createServer((request, response) => {
  console.log("Cliente solicitou...");
  
  response.writeHead(200, { 'Content-Type': 'text/plain'})
  return response.end("Olá NodeJS");
})

app.listen(port, host, () => {
  console.log(`Servidor NodeJs executando http://${host}:${port}`)
})
const express = require('express');

const host = 'localhost';
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  return res.send('Hello World!');
});

app.get('/produtos', (req, res) => {
  const list = [
    { id: 1, name: 'Produto 1' },
    { id: 2, name: 'Produto 2' },
  ]

  return res.json(list);
});

app.listen(port, host, () => {
  console.log(`Servidor rodando na porta http://${host}:${port}`);
});
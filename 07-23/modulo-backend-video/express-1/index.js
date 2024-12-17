const express = require('express');
const usersRoutes = require('./routes/usersRoutes');

const host = 'localhost';
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  return res.status(200).send(
  `<div style="text-align: center; margin-top: 100px; font-size: 40px;">
      Hi, I'm a backend with Nodejs and Express
  </div>`
  )
})

app.use(usersRoutes);
app.listen(port, host, () => {
  console.log(`Servidor rodando na porta http://${host}:${port}`);
});
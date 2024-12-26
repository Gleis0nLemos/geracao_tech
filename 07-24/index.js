const express = require('express');
const app = express();
const usersRoutes = require('./src/routes/usersRoutes');

app.use(express.json());
app.use('/users', usersRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
})
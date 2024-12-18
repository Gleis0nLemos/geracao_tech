const express = require('express')
const app = express()
const routes = require('./src/routes/taskRoutes')

app.use(express.json())
app.use('/tasks', routes)

const PORT = 3000
const host = 'localhost'

app.listen(PORT, host, () => {
  console.log('Server is running at http://' + host + ':' + PORT); 
})
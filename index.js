const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>This is express app</h1>')
})

app.get('/admin', (req, res) => {
  res.send('<h1>Hello admin</h1>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
const express = require('express')
const fs = require('fs')
const app = express()
const port = 3030
const data = fs.readFileSync('data.json','utf-8')
console.log(data);

app.get('/', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
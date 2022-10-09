const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('你好我是秃鹰，你好我是土豆!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
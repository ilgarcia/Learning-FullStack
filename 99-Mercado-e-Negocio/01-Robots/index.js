const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/teste', (req, res) => {
    res.send("Este é um teste")
})

app.get('/', (req,res) => {
    res.send('Hello World')
})

app.listen(3001, () => {
    console.log("Server Running")
})
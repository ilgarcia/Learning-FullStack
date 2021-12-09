const express = require("express")
const apiRoute = require('./routes/api')
const path = require('path')

const app = express();

app.use('/api', apiRoute)
app.use(express.static(path.join(__dirname, 'public')))

const PORT = 5000;

// var index = require('./routes/index')

// app.use("/", index)


app.listen(PORT, ()=> {
    console.log(`Servidor conectado com sucesso na porta ${PORT}`)
})


var express = require('express')
var app = express

// variaveis de desenvolvimento, usando a biblioteca dotenv e criando um arquivo .end
require("dotenv").config()

let port = process.env.PORT

app.listen(port, function () {
    console.log('Server listening on port %s', port)
})
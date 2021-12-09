const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')

const PORT = 5000;

const app = express();

// app.use(express.static(path.join(__dirname, 'client')))
// app.use("/meusite", express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
  res.type('html')
  res.send('<h1>Hello World!... From Get</h1>')
})

app.post("/",(req, res)=>{
  res.send('<h1>Hello World!... From Post</h1>')
})

app.put("/",(req, res)=>{
  res.send('<h1>Hello World!... From Put</h1>')
})

app.delete("/",(req, res)=>{
  res.send('<h1>Hello World!... From Delete</h1>')
})


// Middleware

let consoleMethod = (req, res, next) => {
  console.log(req.method)

  // // next vazio - passa para o proximo middleware
  next()

  // // Next com texto - não passa para o proximo middleware e manda mensagem de erro 500
  // next("Erro de qualquer coisa")
}

let consoleBody = (req, res, next) => {
  console.log(req.body)
  next()
}

let hello = (req, res) => {
  res.send('Hello World')
}

// Usando o middleware

// app.get('/middleware', consoleMethod, hello)
// app.post('/middleware', consoleMethod, hello)

// ou

app.use('/middleware', consoleMethod)
app.use('/middleware', bodyParser.json())
app.use('/middleware', consoleBody)
app.get('/middleware', hello)
app.post('/middleware', hello)

// Rotas

var alunos = require("./routes/alunos")

app.use(bodyParser.urlencoded())

app.use("/api", alunos)

app.listen(PORT,()=> {
  console.log(`Server Running on Port: ${PORT}`)
})
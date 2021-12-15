const express = require('express')
const path = require('path')
const socketIO = require('socket.io')

const app = express()


app.use('/', express.static(path.join(__dirname, 'public')))

const server = app.listen(3000, ()=>{
    console.log("running")
})

const io = socketIO(server)

io.on('connection', (socket)=>{
    console.log("New connection")

    const random = Math.random()
    console.log(random)

    // socket.emit('hello', {msg: `Seja bem vindo ${random}`})
    
    // Mandar mensagem para todos  conectadas
    // io.emit('hello', {msg: `Seja bem vindo ${random}`})
    
    // Mandar mensagem para todas as pessoas menos para a pessoa conectando
    socket.broadcast.emit('hello', {msg: `Seja bem vindo ${random}`})

    socket.on('hello_client_response',(data)=>{
        console.log(data.msg )
    })
})
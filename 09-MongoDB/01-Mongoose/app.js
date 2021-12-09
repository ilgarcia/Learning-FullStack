const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path')

const linkRoute= require('./routes/linkRoute')

const PORT = 3000;

// 1ª Maneira

// mongoose.connect("mongodb://localhost/links", (err, db)=>{
//     console.log(err)
//     console.log(db)
// })

// 2ª Maneira

// mongoose.connect("mongodb://localhost/links").then(db =>{
//     console.log(db)
// }).catch(err=>{
//     console.log(err)
// })

// 3ª Maneira (mais usual)

mongoose.connect("mongodb://localhost/links", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let db = mongoose.connection;

db.on("error", () => {
    console.log("Houve um erro");
});
db.once("open", () => {
    console.log("Banco carregado");
});

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/',linkRoute)

// --------------------------

// Criando um novo link

// let link = new Link({
//     title: "teste",
//     description: "Link para x",
//     url: "https://google.com.br",
//     click: 0,
// });

// link.save().then(doc=>{
//     console.log(doc)
// }).catch(err=>{console.log(err)})

// ---------------------------

// const personSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
// })

// const Person = mongoose.model('Person', personSchema)

// let person = new Person({
//     name: "teste2",
//     age:24
// })

// person.save().then(doc=>{
//     console.log(doc)
// }).catch(err=>{
//     console.log(err)
// })

// ---------------------------




app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));

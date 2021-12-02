"use strict";

// Aparece a informação da variavel no log do window

var x = 7;

console.log(x)
console.log(window)

// Não aparece a informação da variavel no log do window

function imprimir() {
    
    var x = 7;
    console.log(x);

    // Se não usar var ele gera uma variavel global
    // "use strict" - obriga que você declare as variaveis no seu programa
    // y = 3;
    
}

imprimir()

// console.log(y)
console.log(window)

// bind
// amarra a função com a variavel

function speakGeneric() {
    console.log(this.sound)
}

let dog = {
    sound: "au-au",
    speak: speakGeneric
    
}

let cat = {
    sound: "miau",
    speak: speakGeneric
}

// dog.speak();
// cat.speak();

let bindedFunction = speakGeneric.bind(dog)

bindedFunction();

// Arrow function

let dobro = x => {
    console.log(2 * x)
}

dobro(7)

let dobroDois = x => {
    return 2 * x
} 

console.log(dobroDois(6))

// Callback
// Passar uma função dentro de outra função

function ola(){
    console.log("olá!")
}

function saudacao(s, nome) {
    
    s()
    console.log(nome)

}

saudacao(ola, "Igor")

// Outro exemplo de Callback

let usuarios  = ["nome1", "nome2", "nome3"]

function inserirUsuario(nome, callback) {

    setTimeout(() => {
        usuarios.push(nome);
        callback();
    },1000)
    
}

function listar() {
    console.log(usuarios)
}

inserirUsuario("Igor", listar)

// Promises
// Substitui o callback

let usuariosDois  = ["nome1", "nome2", "nome3"]

function inserirUsuarioDois(nome) {
    
    let promise = new Promise(function (resolve, reject){
        
        setTimeout(() => {
            usuariosDois.push(nome);
            
            let error = false;
            if(!error){
                resolve()
            } else{
                reject({msg: "Erro de qualquer coisa"})
            }
            
        },1000)
        
    })
    // console.log(promise)
    return promise;
}

function listarUsuarios() {
    console.log(usuariosDois)
}

inserirUsuarioDois("Igor-Dois")
// .then so roda se passar pelo resolve()
.then(listarUsuarios)
.catch((error) => {
    console.log(error.msg)
})

// Async Await

let usuariosTres  = ["nome1", "nome2", "nome3"]

function inserirUsuarioTres(nome) {
    
    let promise = new Promise(function (resolve, reject){
        
        setTimeout(() => {
            usuariosTres.push(nome);
            
            let error = false;
            if(!error){
                resolve()
            } else{
                reject({msg: "Erro de qualquer coisa"})
            }
            
        },1000)
        
    })
    return promise;
}

function listarUsuariosTres() {
    console.log(usuariosTres)
}

async function executar() {
    
    await inserirUsuarioTres("Igor-tres")
    listarUsuariosTres()
}

executar()

// Filter

function novoAluno(nome, idade) {
    return{nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35)
];

function temMenosDe30(aluno) {
    return aluno.idade < 30
}

let alunosFilter = alunos.filter(temMenosDe30)

console.log(alunosFilter)

// Map

function nomeIdade(aluno) {
    return aluno.nome + " tem " + aluno.idade + " anos"
}

function nomeIdadeDois(aluno) {
    return {nome: aluno.nome,
            idade: aluno.idade}
}

console.log(alunos.map(nomeIdade))
console.log(alunos.map(nomeIdadeDois))

// referencia na atribuição
// quando se trata de atribuição de um array ou objeto (var a = var b) ele mantem a mesma referencia

let turmaA = ["Nome1", "Nome2", "Nome3", "Nome4"]

let turmaB = turmaA.slice();
// Spread operator
let turmaC = [...turmaA];

turmaB.push("Igor")

let alunoA = {nome: "Igor", idade: 15}

let alunoB = Object.assign({}, alunoA)
alunoB.idade = 25;

// Spread operator
let alunoC = {...alunoA, cidade:"Rio de janeiro", ...alunoB}

var newAluno = {
    matricula: 1234,
    nome: "marcos",
    telefone: 1231231312,
    cidade: "uma ai"
}

var {matricula, nome} = newAluno
var {nome, ...copia} = newAluno

console.log(matricula)
console.log(nome)
console.log(copia)
console.log(nome)

// reduce

function idadeTurma(total, aluno) {
    return total + aluno.idade 
}

console.log(alunos.reduce(idadeTurma, 0))

// fetch 
// https://developer.mozilla.org/en-US/docs/Web/API/Response

let url = "https://reqres.in/api/products/3"

// fetch(url)
// .then((res) => {
//     return res.json()
// })
// .then((data) => {console.log(data)})

function mostrarValor() {
    fetch(url)
    .then((res) => {return res.json()})
    .then((data) => {
        document.getElementById("resultado").innerHTML = data.data.id
    })
}


// try catch

try {

    if (nomeTry) {
        throw "O nome não pode ser vazio"
    }

    console.log(nomeTry)
    
} catch (err) {
    console.log(err)
}
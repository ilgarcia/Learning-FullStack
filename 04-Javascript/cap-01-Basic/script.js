// Tipos de variaveis

// Boolean
// Null
// Undefined
// Number
// String

// Operadores aritméticos

//   +    Adição
//   -    Subtração
//   *    Multiplicação
//   /    Divisão
//   %    Módulo
//   ++   Incremento
//   --   Decremento

// Mais incrementos/decrementos

//  =  |  +=  |  -=  |  *=  |  /=  |  %= 

// Operador de comparação

//   ==   Igual a
//   ===  Valor igual e igual (compara valor e tipo)
//   !=   Não é igual
//   !==  Não igual ou não igual (compara valor e tipo)
//   >    Maior que
//   >=   Maior ou igual que
//   <    Menor que
//   <=   Menor ou igual que

// Operador logico

//   &&   e
//   ||   ou
     
var a = "Variavel a";
console.log(a);

// Valor da variavel global
var num1 = 1;

// Valor da variavel so tem validade local dentro escopo do bloco em que ela foi criada
let num2 = 2;

// Valor da variavel so tem validade local dentro escopo do bloco em que ela foi criada
// Valor constante não se pode atribuir outro valor
const num3 = 3;

// Transformação de variavel numerica

var paraTransformacao = "3.0"
console.log(parseInt(paraTransformacao))
console.log(parseFloat(paraTransformacao))

// Alert e Prompt

var varPrompt = prompt("Aparece uma pergunta no navegador")
alert("Aparece uma mensagem alert no navegador com a variavel prompt = " + varPrompt)

// Estruturas condicionais

var nota1 = 8.0;
var nota2 = 6.0;

var media = (nota1 + nota2) / 2;

if (media >= 8.0) {
    conceito = "Ótimo"
} 
else if (media >= 6.5){
    conceito = "Bom"
}
else {
    conceito = "Regular"
};

console.log(conceito)

// Switch

switch (conceito) {
    case "Ótimo":
        console.log("Parabéns")
        break;

    case "Bom":
        console.log("Aprovado")
        break;

    case "Regular":
        console.log("Reprovado")
        break;

    default:
        console.log("Erro")
        break;
}

// Operador Ternario

var idade = 19

idade >= 18 ? console.log("Pode") : console.log("Não pode")

var pode = idade >= 18 ? true : false 

// For

var cont = 5;

for (var i = 0; i < cont; i++) {
    console.log(i);
}

// While

i = 0
while (i < 5) {
    console.log(i)
    i++
}

// Arrays

var vetor = new Array("x1", "x2", "x3", "x4");
var vetor = ["x1", "x2", "x3", "x4"]

console.log(vetor)
console.log(vetor.length)

for(var x in vetor) {
    console.log(x)
}

for(var x of vetor) {
    console.log(x)
}

vetor.forEach(x => {
    console.log(x)
});

// Funções

function functionMedia(nota1, nota2) {
    var media = (nota1 + nota2) / 2;
    console.log(media)

    return media;
}

var nota1 = 10;
var nota2 = 8;

functionMedia(nota1, nota2);
var resultado = functionMedia(6, 7);

console.log(resultado)

var newMedia = function (n1, n2) {
    return (n1 + n2) / 2;
}

console.log(newMedia(5, 6));

var newMedia2 = (n1, n2) => {
    return (n1 + n2) / 2;
}

console.log(newMedia2(5, 6));

// Objeto

var exemplo = []
exemplo.push("Teste")
console.log(exemplo)

var objeto = new Object();

var objeto = {
    nome: "Igor", 
    notas: [7.5, 5.00],
    media: function (n1, n2) {
        return (n1 + n2) / 2;
    },
    media2: function () {
        return (this.notas[0] + this.notas[1]) / 2;
    }
    }

console.log(objeto)
console.log(objeto.nome)
console.log(objeto["nome"])
console.log(objeto.media(objeto.notas[0], objeto.notas[1]))
console.log(objeto.media2)


objeto.matricula = 12345;
objeto["sobrenome"] = "Oliveira"

console.log(objeto)

// Objeto - construtor

function calcMedia() {
    return (this.nota1 + this.nota2) / 2
}

function criarAluno(nome, n1, n2) {
    return {
        nome: nome, 
        notas: [n1, n2],
        media: calcMedia()
        }
}


var turma = [
    criarAluno("Igor", 9.0, 7.5),
    criarAluno("João", 3.0, 7.5)
]
console.log(turma)

turma.forEach(aluno => {
    console.log(aluno)
});

function obj(n, s) {
    this.nome = n;
    this.sobrenome = s;
}

var o = new obj("Igor", Oliveira)

console.log(o.nome)

// Formas de instanciar uma Data:

// var d = new Date();
// var d = new Date(milliseconds);
// var d = new Date(dateString);
// var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);​

// ​Métodos para manipular datas:

// getDate()	Returns the day of the month (from 1-31)
// getDay()	Returns the day of the week (from 0-6)
// getFullYear()	Returns the year
// getHours()	Returns the hour (from 0-23)
// getMilliseconds()	Returns the milliseconds (from 0-999)
// getMinutes()	Returns the minutes (from 0-59)
// getMonth()	Returns the month (from 0-11)
// getSeconds()	Returns the seconds (from 0-59)
// getTime()	Returns the number of milliseconds since midnight Jan 1 1970, and a specified date
// getTimezoneOffset()	Returns the time difference between UTC time and local time, in minutes
// getUTCDate()	Returns the day of the month, according to universal time (from 1-31)
// getUTCDay()	Returns the day of the week, according to universal time (from 0-6)
// getUTCFullYear()	Returns the year, according to universal time
// getUTCHours()	Returns the hour, according to universal time (from 0-23)
// getUTCMilliseconds()	Returns the milliseconds, according to universal time (from 0-999)
// getUTCMinutes()	Returns the minutes, according to universal time (from 0-59)
// getUTCMonth()	Returns the month, according to universal time (from 0-11)
// getUTCSeconds()	Returns the seconds, according to universal time (from 0-59)
// getYear()	Deprecated. Use the getFullYear() method instead
// now()	Returns the number of milliseconds since midnight Jan 1, 1970
// parse()	Parses a date string and returns the number of milliseconds since January 1, 1970
// setDate()	Sets the day of the month of a date object
// setFullYear()	Sets the year of a date object
// setHours()	Sets the hour of a date object
// setMilliseconds()	Sets the milliseconds of a date object
// setMinutes()	Set the minutes of a date object
// setMonth()	Sets the month of a date object
// setSeconds()	Sets the seconds of a date object
// setTime()	Sets a date to a specified number of milliseconds after/before January 1, 1970
// setUTCDate()	Sets the day of the month of a date object, according to universal time
// setUTCFullYear()	Sets the year of a date object, according to universal time
// setUTCHours()	Sets the hour of a date object, according to universal time
// setUTCMilliseconds()	Sets the milliseconds of a date object, according to universal time
// setUTCMinutes()	Set the minutes of a date object, according to universal time
// setUTCMonth()	Sets the month of a date object, according to universal time
// setUTCSeconds()	Set the seconds of a date object, according to universal time
// setYear()	Deprecated. Use the setFullYear() method instead
// toDateString()	Converts the date portion of a Date object into a readable string
// toGMTString()	Deprecated. Use the toUTCString() method instead
// toISOString()	Returns the date as a string, using the ISO standard
// toJSON()	Returns the date as a string, formatted as a JSON date
// toLocaleDateString()	Returns the date portion of a Date object as a string, using locale conventions
// toLocaleTimeString()	Returns the time portion of a Date object as a string, using locale conventions
// toLocaleString()	Converts a Date object to a string, using locale conventions
// toString()	Converts a Date object to a string
// toTimeString()	Converts the time portion of a Date object to a string
// toUTCString()	Converts a Date object to a string, according to universal time
// UTC()	Returns the number of milliseconds in a date since midnight of January 1, 1970, according to UTC time
// valueOf()	Returns the primitive value of a Date object
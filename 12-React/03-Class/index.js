
const Person = require('./Person')
const Alumn = require('./Person')

let joao = new Person("João", 20);

joao.greetings();

let marcos = new Alumn("Marcos", 30, "1001");

console.log(marcos.name);

marcos.greetings();


//  Modulo calc.js

let calc = require("./calc")
// let mult = require("./calc").multi

let args = process.argv.slice(2)

console.log(args)

let a = Number(args[1])
let b = Number(args[2])

if (args[0] == "s") {
    c = calc.soma(a, b)
} else if (args[0] == "m") {
    c = calc.multi(a, b)
} else{
    c = "Opção invalida"
}

console.log(c)


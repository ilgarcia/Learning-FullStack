let fs = require("fs")

// // write

// fs.writeFile('teste.txt', 'Hello World', function (err) {
//     if (err) {
//         throw err
//     }
//     console.log("Arquivo criado com sucesso")
// })

// // Append

// fs.appendFile('teste.txt', ' - Olá mundo', function (err) {
//     if (err) {
//         throw err
//     }
//     console.log("Arquivo criado com sucesso")
// })

// // Unlink

// fs.unlink('teste.txt', function (err) {
//     if (err) {
//         throw err
//     }
//     console.log("Arquivo criado com sucesso")
// })

// // rename

// fs.rename('teste.txt', 'novoNome.txt', function (err) {
//     if (err) {
//         throw err
//     }
//     console.log("Arquivo criado com sucesso")
// })

// // read

// fs.readFile('novoNome.txt','UTF8', function (err, data) {
//     if (err) {
//         throw err
//     }
//     console.log("Arquivo criado com sucesso")
//     console.log(data)
// })

let args = process.argv.slice(2);

let fileName = args[0]

fs.readFile(fileName, 'UTF8', (err, data) => {
    if (err) {
        throw err
    }

    fs.writeFile(fileName + "_uppercase", data.toUpperCase(), (err) => {
        if(err) {throw err}
    })
    console.log("Arquivo gerado com sucesso")

})
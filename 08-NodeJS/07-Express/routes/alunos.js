var express = require('express')
var router = express.Router()

let alunos = [
    {id: 0, nome: "Jose"},
    {id: 1, nome: "Maria"},
    {id: 2, nome: "João"},
    {id: 3, nome: "Marcos"}
  ]

router.get("/aluno", (req, res, next)=>{
    console.log(req.body)
    let aluno = alunos[req.body.id]
    if (aluno) {
        res.json(aluno)
    } else {
        next()
    }
    
})

router.get("/aluno", (req, res, next)=>{

    // // http://localhost:5000/aluno?id=2
    console.log(req.query)
    let aluno = alunos[req.query.id]
    if (aluno) {
        res.json(aluno)
    } else {
        res.send("Aluno não encontrado")
    }
})

router.get("/aluno/:id", (req,res)=>{
    console.log(req.params)
    let aluno = alunos[req.params.id]
    res.json(aluno)
})

router.get("/alunos", (req, res) => {
    res.json(JSON.stringify(alunos))
})
  

module.exports = router;
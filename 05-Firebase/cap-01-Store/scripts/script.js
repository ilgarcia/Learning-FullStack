
// Import the functions you need from the SDKs you need

// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkNES7NNt1M5A4ZGZyQZCxN6yBBpjMW14",
    authDomain: "estudo-backend-78795.firebaseapp.com",
    databaseURL: "https://estudo-backend-78795-default-rtdb.firebaseio.com",
    projectId: "estudo-backend-78795",
    storageBucket: "estudo-backend-78795.appspot.com",
    messagingSenderId: "724412635149",
    appId: "1:724412635149:web:aa6b7cf38635452f28dd44"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

//Pegando info do db - forma 1
db.collection("TurmaA").get().then((snapshot) => {
    snapshot.forEach(doc => {
        let aluno = doc.data();
        console.log(aluno)
    });
})


//Pegando info do db - forma 2
let docRef = db.collection("TurmaA").doc("dkQ0M9Ilinb86Gumxg0H")

docRef.get().then((doc)=> {
    console.log(doc.data())
})

//Pegando info do db - forma 3 (busca)

db.collection("TurmaA").where("nome", "==", "Igor").get().then((snapshot) => {
    snapshot.forEach(doc => {
        let aluno = doc.data()
        console.log(aluno.nome)
    })
})

const TURMA = "TurmaA"

// Inserindo dados - forma 1

// db.collection(TURMA).add({
//     nome: "Marcos",
//     sobrenome: "santos",
//     notas: {nota1: 9.6, nota2: 7.5}
// }).then((doc)=>{
//     console.log("Documento inserido com sucesso", doc)
// }).catch(err => {
//     console.log(err)
// })

// Inserindo/Modificar sobrescreve dados - forma 2

// db.collection(TURMA).doc("AlunoNovo").set({
//     nome: "Mariana",
//     sobrenome: "lima",
//     notas: {nota1: 8.6, nota2: 7.5}
// }, 
// // para não sobrescrever colocar merge: true
// {merge: true}
// ).then((doc)=>{
//     console.log("Documento inserido com sucesso")
// }).catch(err => {
//     console.log(err)
// })

// Inserindo/Modificar sobrescreve dados - forma 3

// db.collection(TURMA).doc("AlunoNovo").update({
//     nome: "Mariana",
//     sobrenome: "lima",
//     notas: {nota1: 8.6, nota2: 7.5}
//     cidades: firebase.firestore.FieldValue.arrayUnion("Rio de janeiro", "São Paulo")
//     cidades: firebase.firestore.FieldValue.arrayRemove("Rio de janeiro", "São Paulo")
//     cidades: firebase.firestore.FieldValue.delete()
//     faltas: firebase.firestore.FieldValue.increment(6)
// },
// ).then((doc)=>{
//     console.log("Documento inserido com sucesso")
// }).catch(err => {
//     console.log(err)
// })

// deletar turma

// db.collection(TURMA).doc("AlunoNovo").delete()).then((doc)=>{
//     console.log("Documento inserido com sucesso")
// }).catch(err => {
//     console.log(err)
// })

// onSnapshot

// indicando de alteração - forma 1
// db.collection(TURMA).onSnapshot((snapshot) => {
//     snapshot.forEach(doc => {
//         let aluno = doc.data();
//         console.log(aluno)
//     });
// })


//indicando alteração do db - forma 2
let docRefNew = db.collection("TurmaA").doc("dkQ0M9Ilinb86Gumxg0H")

docRefNew.onSnapshot((doc)=> {
    console.log(doc.data())
})
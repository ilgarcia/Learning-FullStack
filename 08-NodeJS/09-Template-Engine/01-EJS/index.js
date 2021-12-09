const express = require("express")
const fs = require("fs")
const path = require("path")
const app = express()


app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

let users = [
    {
        id: 0,
        name: "Igor",
        phone: "(22)2222-2222",
    },
    {
        id: 1,
        name: "Jose",
        phone: "(22)2222-3333",
    },
    {
        id: 2,
        name: "Marcos",
        phone: "(22)2222-4444",
    },
]

app.get("/", (req, res) => {

    // res.render('user', {name: "Igor Lima", phone: "(22)2222-2222"})
    res.render('user', {users: users})

})

app.get("/about", (req, res) => {


    res.render('about')

})

app.listen(3000, () => {
    console.log('Server Running on 3000')
})


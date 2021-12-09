const express = require("express")
const app = express()
const fs = require("fs")

let user = {
    id: 0,
    name: "Igor",
    phone: "(22)2222-2222",
}

function render(data, obj) {
    for (let key in obj) {
        data = data.replace(`{{{${key}}}}`, obj[key])
    }

    return data
}

app.get("/", (req, res) => {

    fs.readFile("./templates/user.html", "UTF-8", (err, data) => {
        if (!err) {

            res.send(render(data, user))

        } else {

        }
    })
})

app.listen(3000, () => {
    console.log('Server Running on 3000')
})
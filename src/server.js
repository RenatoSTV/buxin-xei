// chama o express para inicinar o servidor
const express = require("express")
const nunjucks = require("nunjucks")

const server = express()
//pegar o banco de dados
//const db = require("./database/db.js")



// habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true }))
//configurar pasta publica
server.use(express.static("public"))


//utilizando template engine
server.set("view engine", "njk")

nunjucks.configure("src/app/views",{
    express: server,
    autoescape: false,
    noCache: true
})

//configurar caminhos da minha aplicação
//página inicial
//req: Requisição
//res: Resposta
server.get("/", (req, res) => {
    return res.render("index")
})

server.get("/restaurantes", (req, res) => {
    return res.render("restaurants")
})

server.get("/cadastrar", (req, res) => {
    return res.render("register")
})

server.listen(5100, function () {
    console.log("Server is running")
})
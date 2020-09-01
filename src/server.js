// chama o express para inicinar o servidor
const express = require("express")
const nunjucks = require("nunjucks")
const routes = require('./routes')
const methodOverride = require('method-override')

const server = express()
//pegar o banco de dados
//const db = require("./database/db.js")



// habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true }))

//configurar pasta publica
server.use(express.static("public"))

server.use(methodOverride('_method'))
server.use(routes)

//utilizando template engine
server.set("view engine", "njk")

nunjucks.configure("src/app/views",{
    express: server,
    autoescape: false,
    noCache: true
})


server.listen(5100, function () {
    console.log("Server is running")
})
const express = require('express')
const routes = express.Router()

// Controllers
const Establishment = require('./controllers/EstablishmentController')

// Rotas
routes.get("/", (req, res) => {
    return res.render("website/index")
})

routes.get("/restaurantes", (req, res) => {
    return res.render("website/restaurants")
})

routes.get("/register", Establishment.create)



module.exports = routes
const express = require('express')
const routes = express.Router()

// Controllers
const Website = require('./app/controllers/WebsiteController')
const Establishment = require('./app/controllers/EstablishmentController')

// Rotas
routes.get("/", Website.index)

routes.get("/restaurantes", (req, res) => {
    return res.render("website/restaurants")
})

routes.get("/register", Establishment.create)

routes.post("/register", Establishment.post)



module.exports = routes
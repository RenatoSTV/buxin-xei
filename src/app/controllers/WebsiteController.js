const Establishment = require('../models/Establishment')
const Category = require('../models/Category')

module.exports = {
    async index(req, res) { 
        try {
            const results = await Establishment.all()
            const establishments = results.rows
            
            return res.render("website/index", {establishments})
        } catch (error) {
            console.log(error)
        }


    }
}
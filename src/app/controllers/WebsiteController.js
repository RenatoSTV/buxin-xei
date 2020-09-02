const Establishment = require('../models/Establishment')
const Category = require('../models/Category')

module.exports = {
    async index(req, res) { 
        try {
            const results = await Establishment.all()
            const establishments = results.rows
            const categoryId = results.rows[0].category_id

            const category = await Category.find(categoryId)
            console.log(category)

            return res.render("website/index", {establishments, category})
        } catch (error) {
            console.log(error)
        }


    }
}
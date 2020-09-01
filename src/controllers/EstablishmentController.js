const Category = require('../models/Category')

module.exports = {
    async create(req, res) {
        try {
            results = await Category.all()
            const categories = results.rows
            console.log(categories)

            return res.render("website/register", {categories})
        } catch (error) {
            console.log(error)
        }


    }
}

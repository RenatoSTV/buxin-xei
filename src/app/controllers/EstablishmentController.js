const Category = require('../models/Category')
const Address = require('../models/Address')
const Establishment = require('../models/Establishment')

module.exports = {
    async Show(req, res){
        
    },
    async create(req, res) {
        try {
            results = await Category.all()
            const categories = results.rows

            return res.render("website/register", { categories })
        } catch (error) {
            console.log(error)
        }


    },
    async post(req, res) {
        try {
            const keys = Object.keys(req.body)

            for (key of keys) {
                if (req.body[key] == "") {
                    return res.send('Please, fill all fields!')
                }
            }

            let { street, number, city } = req.body

            const address = { street, number, city }
            const addressId = await Address.post(address)
            console.log(req.body)
            const results = await Establishment.post(req.body, addressId)

            return res.redirect('/')
        } catch (error) {
            console.log(error)
        }

    }

}

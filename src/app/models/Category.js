const db = require('../../config/db')

module.exports = {
    async all() {
        const results = await db.query(`SELECT * FROM  categories`)
        return results.rows
    },
    async find(id) {
        const results = await db.query('SELECT * FROM categories WHERE id = $1', [id])  
        return results.rows[0]
    },
}
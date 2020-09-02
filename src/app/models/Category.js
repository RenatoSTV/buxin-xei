const db = require('../../config/db')

module.exports = {
    all() {
        return db.query(`
            SELECT * FROM  categories
        `)
    },
    async find(id) {
        const results = await db.query('SELECT * FROM categories WHERE id = $1', [id])  
        return results.rows[0]
    },
}
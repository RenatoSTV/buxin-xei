const db = require('../../config/db')

module.exports = {
    async post(address) {
        try {
            const query = `
            INSERT INTO address (
                street,
                number,
                city
            ) VALUES ($1, $2, $3)
            RETURNING id
        `
            const values = [
                address.street,
                address.number,
                address.city
            ]

            const results = await db.query(query, values)

            return results.rows[0].id
        
        } catch (error) {
            console.log(error)
        }
        
    }
}
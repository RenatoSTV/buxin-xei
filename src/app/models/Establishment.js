const db = require('../../config/db')

module.exports = {
    async all(){
        return db.query(`
        SELECT establishments.*, categories.name AS category_name
        FROM establishments
        LEFT JOIN categories
        ON (categories.id = establishments.category_id)
        `)
    },
    async post(data, address_id) {
        console.log(data)
        try {
            const query = `
            INSERT INTO establishments (
                name,
                image_url,
                phone,
                address_id,
                category_id,
                delivery
            ) VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id
        `
            const values = [
                data.name,
                data.image_url,
                data.phone,
                address_id,
                data.category_id,
                data.delivery
            ]

            const results = await db.query(query, values)
            return results.rows[0]
        
        } catch (error) {
            console.log(error)
        }
        
    }
}
//NOTE: THIS IS NOT USING A POOL and you should for production!!!

const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'storage_services',
    password: 'Moral007',
})

//YOU CANNOT DO THIS IN A REAL PROJECT!!! IT NEEDS TO BE IN SOMETHING LIKE ENV
const getClient = async () => {
    const client = await pool.connect()
    return client
}

module.exports = {
    getClient
}
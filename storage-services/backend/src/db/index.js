require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool({
    user: process.env.USER_NAME,
    host: process.env.HOST_NAME,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
})

const getClient = async () => {
    const client = await pool.connect()
    return client
}

module.exports = {
    getClient
}

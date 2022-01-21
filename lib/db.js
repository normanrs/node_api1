require('dotenv').config()
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'mmzmbxxq',
    host: 'castor.db.elephantsql.com',
    database: 'mmzmbxxq',
    password: process.env.DB_PASS,
    port: 5432,
})

module.exports = pool;

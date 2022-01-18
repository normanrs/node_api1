require('dotenv').config()
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'mmzmbxxq',
    host: 'castor.db.elephantsql.com',
    database: 'mmzmbxxq',
    password: process.env.DB_PASS,
    port: 5432,
})

const ensureDbConn = (req, res) => {
    try {
        pool.query(`SELECT 1`, () => {
            res.status(200).json({healthy: true})
        })
    } catch (err) {
        throw new Error(err.message);
    }
};

const getCities = (req, res) => {
    try {
        pool.query(`SELECT * FROM cities LIMIT 10`, (err, results) => {
            res.status(200).json(results.rows)
        })
    } catch (err) {
        throw new Error(err.message);
    }

}

module.exports = { ensureDbConn, getCities }

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

const getCity = (req, res) => {
    const {
        name
    } = req.query;
    // strip the incoming param to only the first 8 characters to prevent SQL injection
    const strippedName = name.split(0, 8);
    try {
        pool.query(`SELECT * FROM cities WHERE name LIKE '${strippedName}%' LIMIT 10`, (err, results) => {
            res.status(200).json(results.rows)
        })
    } catch (err) {
        throw new Error(err.message);
    }

}

module.exports = { ensureDbConn, getCities, getCity }

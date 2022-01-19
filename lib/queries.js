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
    pool.query(`SELECT 1`, (err, _results) => {
        if (err) {
            res.status(500).json({error: err.message})
        } else {
            res.status(200).json({healthy: true})
        }
    })
};

const randomCity = (req, res) => {
    pool.query(`SELECT * FROM cities ORDER BY RANDOM() LIMIT 1`, (err, results) => {
        if (err) {
            res.status(500).json({error: err.message})
        } else {
            res.status(200).json(results.rows[0])
        }
    })
};

const citySearch = (req, res) => {
    const {
        name,
        limit
    } = req.query;
    // strip the incoming param to only the first 8 characters to prevent SQL injection
    const strippedName = name.split(0, 8);
    pool.query(
        `SELECT * 
        FROM cities 
        WHERE LOWER(name) 
        LIKE LOWER('${strippedName}%') 
        LIMIT ${limit || 10}`,
        (err, results) => {
            if (err) {
                res.status(500).json({error: err.message})
            } else {
                res.status(200).json(results.rows)
            }
        })
}

module.exports = { ensureDbConn, randomCity, citySearch }

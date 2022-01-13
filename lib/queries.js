const Pool = require('pg').Pool
const pool = new Pool({
    user: 'mmzmbxxq',
    host: 'castor.db.elephantsql.com',
    database: 'mmzmbxxq',
    password: 'BXzQxkQs_tSAVZx1cmHHr9PhaQWZAmfo',
    port: 5432,
})

const ensureDbConn = (req, res) => {
    pool.query('select 1', (error, _results) => {
        if (error) {throw error}
        res.status(200).json({healthy: true})
    })
};

const getCities = (req, res) => {
    pool.query(`SELECT * FROM cities LIMIT 10`, (error, results) => {
        if (error) { throw error}
        res.status(200).json(results.rows)
    })
}

module.exports = { ensureDbConn, getCities }

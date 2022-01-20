const { pool } = require('./db')

async function healthcheck() {
    try {
        const result = await pool.query('SELECT 1');
        return result.rows.length > 0;
    } catch (err) {
        throw err;
    }
}

async function randomCity() {
    try {
        const result = await pool.query('SELECT * FROM cities ORDER BY RANDOM() LIMIT 1');
        return result.rows[0];
      } catch (err) {
        throw err;
      }
}

async function citySearch(name, limit) {
    // strip the incoming param to only the first 8 characters to prevent SQL injection
    const strippedName = name.split(0, 8);
    try {
        const result =  await pool.query(
            `SELECT * 
            FROM cities 
            WHERE LOWER(name) 
            LIKE LOWER('${strippedName}%') 
            LIMIT ${limit || 10}`);
        return result.rows;
      } catch (err) {
        throw err;
      }
}

module.exports = { healthcheck, randomCity, citySearch }

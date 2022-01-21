const query = require('./queries')

const healthcheck = async (req, res) => {
    try {
        const result = await query.healthcheck()
        res.status(200).send({healthy: result});
      } catch (err) {
        res.status(500).send({error: err.message});
      }
};

const randomCity = async (req, res) => {
    try {
        const result = await query.randomCity()
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send({error: err.message});
    }
};

const citySearch = async (req, res) => {
    const { name, limit } = req.query;
    try {
        const result = await query.citySearch(name, limit)
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send({error: err.message});
    }
}

module.exports = { healthcheck, randomCity, citySearch }

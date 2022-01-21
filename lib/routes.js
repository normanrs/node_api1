const cors = require('cors');
const router = require('express').Router();

const controller = require('../lib/controller');
router.use(cors());

router.get('/healthcheck', controller.healthcheck);
router.get('/randomCity', controller.randomCity);
router.get('/citySearch', controller.citySearch);

module.exports = router;

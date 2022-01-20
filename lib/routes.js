const cors = require('cors');
const controller = require('../lib/controller');
const db = require('../lib/queries');
const router = require('express').Router();
router.use(cors());

router.get('/healthcheck', controller.healthcheck);
router.get('/randomCity', controller.randomCity);
router.get('/citySearch', controller.citySearch);

module.exports = router;

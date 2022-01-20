const cors = require('cors');
const controller = require('../lib/controller');
const db = require('../lib/queries');
const router = require('express').Router();
router.use(cors());

router.get('/healthcheck', controller.healthcheck);
router.get('/randomCity', db.randomCity);
router.get('/citySearch', db.citySearch);

module.exports = router;

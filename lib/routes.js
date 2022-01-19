const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../lib/queries');

const router = require('express').Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cors());

router.get('/healthcheck', db.ensureDbConn);
router.get('/randomCity', db.randomCity);
router.get('/citySearch', db.citySearch);

module.exports = router;

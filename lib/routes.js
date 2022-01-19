const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../lib/queries');

const router = require('express').Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cors());

router.get('/healthcheck', db.ensureDbConn);

module.exports = router;

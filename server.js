const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./lib/queries')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/info', (req, res) => {
    res.json({ info: 'A test API using Node and Postgres for funzies' })
});

app.get('/healthcheck', (req, res) => {
    db.ensureDbConn(req, res);
    res.send
});

app.get('/cities', (req, res) => {
    db.getCities(req, res);
    res.send
});

app.listen(port, () => {
    console.log(`Test API running on port ${port} - for reelz!`)
})

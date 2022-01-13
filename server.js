const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/info', (req, res) => {
    res.json({ info: 'A test API using Node and Postgres' })
});

app.listen(port, () => {
    console.log(`Test API running on port ${port} - for reelz!`)
})

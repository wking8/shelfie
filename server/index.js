require('dotenv').config();
const express = require('express');
const massive = require('massive')
const app = express();
const ctrl = require('./controller');
const {PORT, CONNECTION_STRING} = process.env

app.use(express());

massive(CONNECTION_STRING)
    .then((database) => {
        app.set('db', database)
        app.listen(PORT, () => console.log(`Honky on port ${PORT}`))
    })
require('dotenv').config();
const express = require('express');
const massive = require('massive')
const app = express();
const ctrl = require('./controller');
const {PORT, CONNECTION_STRING} = process.env

app.use(express());

//Endpoints
app.get('/api/products', ctrl.getAll)
// app.post('/api/products', ctrl.add)

// Listener
massive(CONNECTION_STRING)
    .then((database) => {
        app.set('db', database)
        app.listen(PORT, () => console.log(`Honky on port ${PORT}`))
    })
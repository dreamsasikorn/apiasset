const express = require('express');
const app = express()

const apiItem = require('./api/item');
const apiWorkRequest = require('./api/workrequest');

app.use('/api/item', apiItem)
app.use('/api/workrequest', apiWorkRequest)


module.exports = app
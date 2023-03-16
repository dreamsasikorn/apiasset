const express = require('express');
const app = express()

const apiItem = require('./api/item');





app.use('/api/item', apiItem)


module.exports = app
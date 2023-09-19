const express = require('express');
const app = express()

const apiItem = require('./api/item');
const apiWorkRequest = require('./api/workrequest');

app.use('/api/item', apiItem)
app.use('/api/workrequest', apiWorkRequest)

app.get('/',(req,res) => {
    res.setHeader("Content-Type", "application/json");
    data = {
      requestdate: Date(),
      message: "",
      numrow: 0,
      data: [],
    };
    res.status(200).send(data);
});

module.exports = app
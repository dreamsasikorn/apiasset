const mysql = require('mysql');
const conn = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "ietlasset"
})

conn.connect(function (err) {
    if (err) throw err;
    console.log('connect success');
});

module.exports = conn;
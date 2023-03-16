const express = require('express');
const mysql = require('mysql');
const conn = require('../../database');
const router = express.Router();

// check before access to route api here
router.use((req, res, next) => {
    next();
})

router.get('/', (req, res) => {
    let sql = "select * from ietlasset.items"
    conn.query(sql, function (err, result) {
        if (err) {
            res.setHeader('Content-Type', 'application/json');
            data = {
                'message': 'false',
                "errorMessage": err.code,
                'data': []
            }
            res.send(data)
        }
        res.setHeader('Content-Type', 'application/json');
        data = {
            'message': 'success',
            'numrow': result.length,
            'data': result
        }

        res.status(200).send(data)

    })
    // console.log(conn);
    // res.send('api')
});

module.exports = router
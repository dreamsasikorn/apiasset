const express = require('express');
const mysql = require('mysql');
const conn = require('../../database');
const router = express.Router();

// check before access to route api here
router.use((req, res, next) => {
    next();
})

router.get('/', (req, res) => {
    const items = []
    let sql = "select i.id,i.name_item,i.itemcode,i.amount, it.type_name,i.created_at from ietlasset.items i left join itemtype it on it.id = i.item_type_id"
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
        result.forEach(element => {
            items.push({
                "id": element.id,
                "name_item": element.name_item,
                "itemcode": element.itemcode,
                "amount": element.amount,
                "type_name": element.type_name,
                "created_at": (element.created_at).toLocaleString()
            })
        });
        res.setHeader('Content-Type', 'application/json');
        data = {
            'message': 'success',
            'numrow': result.length,
            'data': items
        }

        res.status(200).send(data)

    })
    // console.log(conn);
    // res.send('api')
});

router.post('/create', (req, res) => {

})
module.exports = router
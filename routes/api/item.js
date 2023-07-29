const express = require("express");
const mysql = require("mysql");
const conn = require("../../database");
const router = express.Router();

// check before access to route api here
router.use((req, res, next) => {
  next();
});

router.get("/", (req, res) => {
  const items = [];
  let sql = `SELECT
    i.item_id,
    i.name_item,
    i.itemcode,
    i.amount,
    it.type_name,
    i.created_at
FROM
    ietlasset.items i
LEFT JOIN itemtype it ON
    it.type_id = i.item_type_id`;
  conn.query(sql, function (err, result) {
    if (err) {
      res.setHeader("Content-Type", "application/json");
      data = {
        message: err.sqlMessage,
        numrow: 0,
        data: [],
      };
      res.status(err.status).send(data);
    }
    result.forEach((element) => {
      items.push({
        id: element.id,
        name_item: element.name_item,
        itemcode: element.itemcode,
        amount: element.amount,
        type_name: element.type_name,
        created_at: element.created_at.toLocaleString(),
      });
    });
    res.setHeader("Content-Type", "application/json");
    data = {
      requestdate: Date(),
      message: "success",
      numrow: result.length,
      data: items,
    };

    res.status(200).send(data);
  });
});

module.exports = router;

const express = require("express");
const mysql = require("mysql");
const db_config = require("../../database");
const router = express.Router();

// check before access to route api here
router.use((req, res, next) => {
  next();
});

router.get("/itemtype", (req, res) => {
  const connection = mysql.createConnection(db_config);
  let sql = `SELECT it.type_id,it.type_name FROM itemtype it `;
  connection.query(sql, function (err, result) {
    if (err) {
      res.setHeader("Content-Type", "application/json");
      data = {
        message: err.sqlMessage,
        numrow: 0,
        data: [],
      };
      connection.end();
      res.status(500).send(data);
    }else{
      res.setHeader("Content-Type", "application/json");
      data = {
        requestdate: Date(),
        message: "success",
        numrow: result.length,
        data: result,
      };
      connection.end();
      res.status(200).send(data);
    }

  });
});

module.exports = router;

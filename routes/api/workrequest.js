const express = require("express");
const mysql = require("mysql");
const conn = require("../../database");
const router = express.Router();

// check before access to route api here
router.use((req, res, next) => {
  next();
});

router.get("/", (req, res) => {
      res.setHeader("Content-Type", "application/json");
      data = {
        requestdate: Date(),
        message: "Nothing in here",
        numrow: result.length,
        data: [],
      };
      res.status(200).send(data);
});
router.post('/add-work-request',function (req,res,next) {
    
})
module.exports = router;

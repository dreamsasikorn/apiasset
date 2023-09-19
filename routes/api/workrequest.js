const express = require("express");
// const mysql = require("mysql");
// const conn = require("../../database");
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/workrequest/' })

// const multiparty = require('multiparty')
// check before access to route api here
router.use((req, res, next) => {
  next();
});

router.get("/", (req, res) => {
      res.setHeader("Content-Type", "application/json");
      data = {
        requestdate: Date(),
        message: "",
        numrow: 0,
        data: [],
      };
      res.status(200).send(data);
});
router.post('/add-work-request',upload.array('photos', 12),function (req,res,next) {

      console.log(req.files);
      res.setHeader("Content-Type", "application/json");
      res.status(200).send({
        "title": req.body.title,
        "subtitle": req.body.subtitle,
        "description": req.body.description,
        "byuser":req.body.byuser,
        "approve_status": "1",
        "approveby":"",
        "files": req.files
      })
})
module.exports = router;

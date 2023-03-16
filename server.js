const express = require('express');
const app = express()
// cross origin
const cors = require('cors');
const { urlencoded } = require('express');
const port = 3003
const route = require('./routes/index')

const bodyParser = require('body-parser');

app.use(cors());
// แปลงข้อมูลจาก form ในรูปแบบ url encode เป็น Object
app.use(express.json())
// แปลงข้อมูลจาก form ในรูปแบบ url encode เป็น Object
app.use(urlencoded({ extended: true }))

app.use(bodyParser.json()); //ทำให้รับ json จาก body ได้

app.use('/route', route);

// custom 404
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find this page!")
})

// custom error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})


// const logginMiddleware = (req, res, next) => {
//     if (req.body.username === 'dreamsasikorn@gmail.com') {
//         next();
//     } else {
//         res.send("Wrong username and password")
//         //ถ้า username password ไม่ตรงให้ส่งว่า Wrong username and password
//     }
// }

// app.use('/route', logginMiddleware, route);



app.listen(port, () => {
    console.log("running on port :" + `${port}`);
});

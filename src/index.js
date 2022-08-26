const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment = require("moment");
const ip = require("ip");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Astick_Dutta:AavSNrGfPyPswMGg@cluster0.laksbb0.mongodb.net/Astick-DB", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))



app.use('/', route);

app.use(
    function (req, res, next) {
        const todayDate = moment().format("DD-MM-YYYY , hh:mm:ss");
        console.log(todayDate);
        const ipAddress = ip.address()
        console.log(ipAddress);
        const rouPath = req.path
        console.log(rouPath);
        res.send({ msg: "allEnd" });
    }

);




app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

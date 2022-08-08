const express = require('express');
const logger = require("../logger/logger.js")
const helper = require("../util/helper.js")
const formetter = require("../validator/formetter.js")
const lodash = require("lodash");
const router = express.Router();

router.get('/test-me', function (req, res) {
    // logger.well()
    // helper.printDate()
    // helper.printMonth()
    // helper.batch1()
    // formetter.lowText()
    // formetter.uppText()

    let _ = require("lodash");
    let months = ["January","february","march","april","may","june","july","august","september","october","november","december"]
    console.log (_.chunk(months,4))

    const _ = require('lodash');
      let Odd_num = [1,3,5,7,9,11,13,15,17,19]
  console.log(_.tail(Odd_num));


    const _ = require('lodash');
    let dublicate = _.union([1,3,4,5,6,7,7,78],[1,2,2,3,4,5],[3,4,4,4,5,6,7,7],[4,4,4,5,6,7,7] ,[0,0,9,8,6,6]);
    console.log(dublicate)




    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason
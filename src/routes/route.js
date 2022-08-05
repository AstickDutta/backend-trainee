const express = require('express');
const logger = require("../logger/logger.js")
const helper = require("../util/helper.js")
const formetter = require("../validator/formetter.js")
const router = express.Router();

router.get('/test-me', function (req, res) {
    logger.well()
    helper.printDate()
    helper.printMonth()
    helper.batch1()
    formetter.lowText()
    formetter.uppText()
    
    
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason
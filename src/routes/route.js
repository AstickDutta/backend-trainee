const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController");



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/cowin/getByDistrictId",CowinController.getByDistrictId)

module.exports = router;
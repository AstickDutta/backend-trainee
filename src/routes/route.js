const express = require('express');
const router = express.Router();
const memecontroller= require("../controllers/memeContro")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/makeMeme",memecontroller.meme)

module.exports = router;
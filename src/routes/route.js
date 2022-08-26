const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherContrroller= require("../controllers/publisherContrroller")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

 router.post("/newCreateBook", bookController.newCreateBook)

// router.get("/getBooksData", bookController.getBooksData)

router.post("/createPublisher", publisherContrroller.createPublisher)

router.get("/bookRef", bookController.bookRef)

router.get("/upBook", bookController.upBook)

router.get("/priceUp", bookController.priceUp)

router.get("/aggbook", bookController.aggbook)

//router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;
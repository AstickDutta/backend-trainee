const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

//router.get("/getUsersData", UserController.getUsersData)

router.get("/bookList", UserController.bookList)

router.post("/getBooksInYear", UserController.getBooksInYear)

router.post("/getPerticularBooks", UserController.getPerticularBooks)

router.get("/getXINRBooks", UserController.getXINRBooks)

router.get("/getRandomBooks", UserController.getRandomBooks)

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)


router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

module.exports = router;
const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const middleWare = require("../middlewares/userMiddleware");


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser );

router.post("/login", userController.loginUser);

router.get("/getUserData/:userId",middleWare.isFreeMid,userController.getUserData);

router.put("/updateUser/:userId",middleWare.isFreeMid,userController.updateUserdata);

router.delete("/deleteUser/:userId", middleWare.isFreeMid,userController.deleteUser );

module.exports = router;
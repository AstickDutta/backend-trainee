const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");
const productcontrollers = require("../controllers/productController");
const orderController = require("../controllers/orderController");
const userMiddleware1 = require("../middlewares/userMiddleware");

router.post ("/userCreate",userMiddleware1.isFreeMid,userController.userCreate)
router.post("/productCreate", productcontrollers.productCreate);
router.post("/createOrder", orderController.createOrder);

module.exports = router;
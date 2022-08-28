const { count } = require("console");
const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

const createOrder = async function (req, res) {
    let user = req.body.userId;
    let userfind = await userModel.findById(user).select({ _id: 1 });
    if (!user) {
        return res.send("user id is not present");
    } if (!userfind) {
        return res.send("user id is not valid");
    }
    let product = req.body.productId;
    let productfind = await productModel.findById(product).select({ _id: 1 })

    if (!product) {
        return res.send("product id is not present");

    } if (!productfind) {
        return res.send("product id is not valid");
    }

    //   user and product id validation

    let users = req.headers.isfreeappuser;
    let user1 = JSON.parse(users)
    let body2 = req.body;
    let balenc = await userModel.findById(user).select({ balance : 1, _id: 0 });
    let balenc1 = balenc.balance;
    let balenc2 = await productModel.findById(product).select({ price: 1, _id: 0 });
    let pric = balenc2.price;

    if (user1 === true) {
        req.body.amount = 0;
        let body1 = await orderModel.create(body2);
        return res.send(body1);

    } else if (user1 === false && balenc1 >= pric) {
        let u = await userModel.updateOne({ _id: user }, { $inc: { balance: -pric } }, { new : true }).select({ balance: 1, _id: 0 });
 
        //console.log(u);

        req.body.amount = pric;
        let body3 = await orderModel.create(body2);
        return res.send(body3);
    }
    return res.send("Users has insufficient balance");
}

module.exports.createOrder = createOrder




const productModel = require("../models/productModel");


const productCreate = async function (req, res) {
    let productBody = req.body
    let productBodyCreate = await productModel.create(productBody);
    res.send({ msg: productBodyCreate });
}

module.exports.productCreate = productCreate
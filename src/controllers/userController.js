const userModel = require("../models/userModel");



const userCreate = async function (req, res){

    let userBody = req.body
    let userBodyCreate = await userModel.create(userBody);
    res.send({msg : userBodyCreate});
}

module.exports.userCreate = userCreate 
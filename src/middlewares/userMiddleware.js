const jwt = require("jsonwebtoken")


const isFreeMid = async function (req, res, next) {
    let head = req.headers["x-Auth-Token"];
    if (!head) 
    head = req.headers["x-auth-token"]
    if (!head) return res.send({ status: false, msg: "token is not present" });
    console.log(head);

    let validtoken = jwt.verify(head, "Winners-Never-Quit");
    if (!validtoken) return res.send({ status: false, msg: "the token is not valid" });
    next();

}


module.exports.isFreeMid = isFreeMid
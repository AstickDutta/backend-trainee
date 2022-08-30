const jwt = require("jsonwebtoken")


const isFreeMid = async function (req, res, next) {
    try {
        let head = req.headers["x-Auth-Token"];
        if (!head) head = req.headers["x-auth-token"]
        if (!head) return res.status(401).send({ status: false, msg: "plss input the token" });
        console.log(head);

        let validtoken = jwt.verify(head, "myself-arindam-dan");
        if (!validtoken) {
            return res.status(403).send({ msg: "token is invalid" });
        }
        req.loggedinuser = validtoken["_id"];
        let headid = req.params.userId;
        if (headid !== req.loggedinuser) {
            return res.status(404).send({ msg: "Access denied" });
        }
        next();
    }
    catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }
}

module.exports.isFreeMid = isFreeMid;
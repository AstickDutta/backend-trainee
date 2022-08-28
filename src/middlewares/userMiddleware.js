
const isFreeMid = async function (req, res, next) {
    let headers = req.headers.isfreeappuser;
    //let f = JSON.parse(headers);
    if (headers) {
        req.body.isFreeAppUser = headers;
        next();
    } else {
        return res.send("the request is missing a mandatory header");
    }
}



module.exports.isFreeMid = isFreeMid
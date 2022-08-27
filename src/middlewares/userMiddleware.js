

const isFreeMid = (req, res, next) => {

    if (req.headers.isfreeappuser === undefined)
        res.send({ msg: "The request is missing a mandatory header" })

    else {
        req.isfreeappuser = Boolean(req.headers.isfreeappuser)

        next()
    }
}

module.exports.isFreeMid = isFreeMid
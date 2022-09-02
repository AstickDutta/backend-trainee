let axios = require("axios")

let getByDistrictId = async function (req, res) {
    try {
        let dist = req.query.district_id
        let date = req.query.date
        console.log(`query params are: ${dist} ${date}`)
        var option = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${dist}&date=${date}`
        }
        let result = await axios(option)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.getByDistrictId = getByDistrictId
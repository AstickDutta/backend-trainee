let axios = require("axios")

let meme = async function (req, res) {
   try {
      let template_id = req.query.template_id
      let text0 = req.query.text0
      let text1 = req.query.text1
      let makeAmeme = {
         method: "post",
         url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=Agduke&password=aakash1234`
      }
      let resp = await axios(makeAmeme)
      res.status(200).send({ meme: resp.data })
   } catch (err) {
      console.log(err)
      res.status(500).send({ msg: err.message })
   }
}



module.exports.meme = meme
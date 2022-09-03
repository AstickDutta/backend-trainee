let axios = require("axios");


let memes1 = async function (req, res) {
   try {
      let options = {
         method: "get",
         url: `https://api.imgflip.com/get_memes`
      }
      let result = await axios(options)
      console.log(result.data)
      res.status(200).send({ msg: result.data });
   } catch (err) {
      console.log(err)
      res.status(500).send({ msg: err.message });
   }
}


let memes = async function (req, res) {
   try {
      let template_id = req.query.template_id
      let text0 = req.query.text0
      let text1 = req.query.text1
      let username = req.query.username
      let password = req.query.password

      let options = {
         method: "post",
         url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,
         data: template_id, text0, text1, username, password
      }

      let result = await axios(options)

      res.status(200).send({ msg: result.data })
   }
   catch (err) {

      res.status(500).send({ msg: err.message })
   }
}
module.exports.memes = memes
module.exports.memes1 = memes1

let axios = require("axios")


let londonWeather = async function (req, res) {
   try {
      let option = {
         method: "get",
         url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=8da9dbb65f3268acdf9011a1f046ae82`
      }
      let resp = await axios(option)
      res.status(200).send({ weather: resp.data })
   } catch (err) {
      console.log(err)
      res.status(500).send({ msg: err.message })
   }
}


let weather = async function (req, res) {
   try {
      let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
      let result = []
      for (let elements of cities) {
         let objCities = { city: elements }
         let abc = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${elements}&appid=8da9dbb65f3268acdf9011a1f046ae82`
         }
         let r = await axios(abc)
         objCities.temp = r.data.main.temp
         result.push(objCities)
      }

      let sorted = result.sort(function (a, b) { return a.temp - b.temp })

      res.status(200).send({ msg: sorted })
   } catch (err) {
      console.log(err)
      res.status(500).send({ msg: err.message })
   }
}

module.exports.londonWeather = londonWeather
module.exports.weatherc = weather
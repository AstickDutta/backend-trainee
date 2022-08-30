const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (req, res) {
  try {
    let userBody = req.body;
    if (Object.keys(userBody).length != 0) {
      let user = await userModel.create(userBody);
      res.status(201).send({ msg: user });
    }
    else res.status(400).send({ msg: "In the body there is no data present" })
  }
  catch (err) {
    res.status(500).send({ msg: err.message });

  }
}


const loginUser = async function (req, res) {
  try {
    let userBody2 = req.body;
    let user = userBody2.emailId;
    let pass = userBody2.password;
    let validemailpass = await userModel.findOne({ emailId: user, password: pass });
    if (!validemailpass) return res.status(400).send({ status: false, msg: "email or password is wrong" });
    let uniqueid = validemailpass._id;
    let token1 = jwt.sign({
      _id: uniqueid,
      userid: user,
      password: pass
    },
      "Winners-Never-Quit"
    )
    res.header({ "x-auth-token": token1 });
    res.status(200).send({ status: true, data: { token: token1 } });
  }
  catch (err) {
    res.status(500).send({ msg: err.message })
  }
}


//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzBjYmU3ZjE2ODY1ZTU5OThjMjg1N2MiLCJ1c2VyaWQiOiJhc2RAZ21haWwuY29tIiwicGFzc3dvcmQiOiJhZEAwMCIsImlhdCI6MTY2MTc5NDM1OX0.NW9jfGF7VRaAjKaF4asYn0kkFCEKoTvXIF3QFWDQnMk"

const getUserData = async function (req, res) {
  try {
    let userid = req.params.userId;
    let validUser = await userModel.findById(userid);
    if (!validUser) return res.status(400).send({ status: false, msg: "User is not present" });
    return res.status(200).send({ status: true, msg: validUser })
  }
  catch (err) {
    res.status(500).send({ msg: err.message })
  }
}



const updateUserdata = async function (req, res) {
  try {
    let userid1 = req.params.userId;
    let User = await userModel.findById(userid1);
    if (!User)
      return res.status(400).send({ status: false, msg: "User is not present" });


    let userData = req.body
    let updateUserData = await userModel.findOneAndUpdate({ _id: userid1 }, userData, { new: true });
    res.status(200).send({ status: true, msg: updateUserData });
  }
  catch (err) {
    res.status(500).send({ msg: err.message })
  }

}

const deleteUser = async function (req, res) {
  try {
    let delUserid = req.params.userId;
    let User3 = await userModel.findById(delUserid);
    if (!User3) return res.status(400).send({ status: false, msg: "User is not present" });

    let deleteUserData = await userModel.findOneAndUpdate({ _id: delUserid }, { isDeleted: true }, { new: true });
    res.send.status(200)({ status: true, msg: deleteUserData });
  }
  catch (err) {
    res.status(500).send({ msg: err.message })
  }
}


module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUserdata = updateUserdata;
module.exports.deleteUser = deleteUser;

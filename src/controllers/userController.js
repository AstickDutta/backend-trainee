const userModel = require("../models/userModel")
//const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await userModel.create(data)
    res.send({msg: savedData})
}



const bookList = async function(req, res){
    let allBooks = await userModel.find().select({authorName : 1, bookName : 1, _id : 0});
    res.send({msg : allBooks});

}


const getBooksInYear = async function(req, res){
    let years = req.body.year;
    let booksYear = await userModel.find({"year" : years}).select({bookName: 1,authorName : 1, year : 1, _id : 0})
    res.send({msg : booksYear});

}

const getPerticularBooks = async function(req, res){
    let input = req.body;
    let booksInput = await userModel.find(input)
    res.send({msg : booksInput});
}


const getXINRBooks = async function(req, res){
    let booksInput = await userModel.find({"price.indianPrice" : {$in : ["100 INR", "200 INR","500 INR"]}}).select({bookName : 1, _id : 0})
    res.send({msg : booksInput});
}


const getRandomBooks = async function(req, res){
    let booksInput = await userModel.find({stockAvailble: true, totalPages : {$gt : 500}}).select({bookName : 1, stockAvailble : true})
    res.send({msg : booksInput});
}


// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
//}

module.exports.createUser = createUser
//module.exports.getUsersData = getUsersData
module.exports.bookList = bookList
module.exports.getRandomBooks = getRandomBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getPerticularBooks = getPerticularBooks
module.exports.getBooksInYear = getBooksInYear
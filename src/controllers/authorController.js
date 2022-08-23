const { count } = require("console");
//const bookModel= require("../modules/bookModel.js");
const authorModel= require("../modules/authorModel.js");


const createAuthor = async function (req, res) {
    let authorData = req.body
    let finalData = await authorModel.create(authorData)
    res.send({msg : finalData })

}


const listBooks = async function (req,res){
    let findAuthor = await authorModel.find({author_name : "Chetan Bhagat"});
    let findBook = await bookModel.find({author_id : {$eq : findAuthor[0].author_id}});
    res.send({msg : findBook})
}

const updateBooks = async function (req, res){
    let bookPrice = await bookModel.findOneAndUpdate({name : "Two states"},{$set : {price : 100}});
    let priceUpdate = bookPrice;
    let authorUpdate = await authorModel.find({author_id : {$eq : bookPrice.author_id}})
    res.send({authorUpdate,priceUpdate});
}

const bookrange = async function(req,res) {
    let range = await bookModel.find({price : {$gte:50, $lte:100}});
    let X = range.map(x=>x.author_id);
    let totalRange = await authorModel.find({author_id : {$in : X}}).select({author_name : 1,_id : 0});
    res.send(totalRange);
}


module.exports = {createAuthor,listBooks,updateBooks,bookrange}

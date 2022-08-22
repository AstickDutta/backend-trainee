const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
//const publisherModdel = require("../models/publisherModdel")
const mongoose = require("mongoose")
const publisherModel = require("../models/publisherModel")



// const createBook = async function (req, res) {
// let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated});

// const getBooksData= async function (req, res) {
//         let books = await bookModel.find()
//         res.send({data: books})
//     }

const newCreateBook = async function (req, res) {
    let book1 = req.body
    let author = req.body.author;
    let publisher = req.body.publisher;
    let author_id = await authorModel.findById(author).select({ _id: 1 });
    let publisher_id = await publisherModel.findById(publisher).select({ _id: 1 });

    if (!author) {
        return res.send("This details is required")
    } if (!author_id) {
        return res.send("This author is not present")
    } if (!publisher) {
        return res.send("This details is required")
    } if (publisher_id) {
        return res.send("The publisher is not present")
    }
    let bookBody = await bookModel.create(book1);
    return res.send(bookBody)
    
}


const bookRef = async function (req, res) {
    let newRefBook = await bookModel.find().populate(["author_id", "publisher"]);
    return res.send({ msg: newRefBook });
}


const upBook = async function (req, res) {
    let newBook = await publisherModel.find({ $or: [{ name: "Penguin" }, { name: "HarperCollins" }] }).select({ id: 1 });
    let newBook1 = newBook.map(x => x["_id"]);
    let updateBook = await bookModel.updateMany({ publisher: { $in: (newBook1) } }, { $set: { isHardCover: true } }, { new: true });
    return res.send({ msg: updateBook });
}



const priceUp = async function(req, res){
    let findRate = await authorModel.find({rating : {$gt : 3.5}}).select({_id : 1});
    let findRate1 = findRate.map(x => x["_id"]);
    let updatePrice = await bookModel.updateMany({author_id : {$in:(findRate1) }}, {$inc :{ price : +10}}, {new : true});
    return res.send({msg : updatePrice});
}


//module.exports.createBook = createBook;
// module.exports.getBooksData = getBooksData; 
module.exports.newCreateBook = newCreateBook;
module.exports.bookRef = bookRef
module.exports.upBook = upBook
module.exports.priceUp = priceUp

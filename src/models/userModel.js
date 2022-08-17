const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String
    },
    year : {
        type : Number,
        default : 2021
    },
    totalPages : Number,
    stockAvailable : Boolean
}, { timestamps: true });
 

module.exports = mongoose.model('newBooks', userSchema) //users



// String, Number
// Boolean, Object/json, array



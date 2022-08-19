const mongoose = require('mongoose');

const Authorschema = new mongoose.Schema( {
author_id : {
    type : Number,
    required : true
},
author_name : String,
age : Number,
address : String
}, { timestamps: true });

module.exports = mongoose.model('Author', Authorschema)





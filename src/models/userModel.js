const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    balance: {
        type: Number,
        default: 100
    },
    address: String,
    age: Number,
    gender: ["male", "female", "other"]

}, { timestamps: true });

module.exports = mongoose.model('buyUser', userSchema)
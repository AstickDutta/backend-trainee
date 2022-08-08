const express = require('express');
const logger = require("../logger/logger.js")
const helper = require("../util/helper.js")
const formetter = require("../validator/formetter.js")
const lodash = require("lodash");
const router = express.Router();

router.get('/movies', function (req, res) {

    let movies = ["3 idiots", "super 30", "Bahubali", "Bahubali 2", "RR", "Chichore"]

    res.send(movies)

});




router.get('/movies/:indexNumber', function (req, res) {
    let movies = ["3 idiots", "super 30", "Bahubali", "Bahubali 2", "RR", "Chichore"]
    let index = req.params.indexNumber;
    console.log(movies[index])
    res.send(movies[index]);

})




router.get('/movies/:indexNumber', function (req, res) {
    let movies = ["3 idiots", "super 30", "Bahubali", "Bahubali 2", "RR", "Chichore"]
    let index = req.params.indexNumber;
    if (index < 6) {
        res.send(movies[index]);
        console.log(movies[index])
    } else {
        res.send("use a valid index");
        console.log("use a valid index")
    }


})




router.get('/films', function (req, res) {
    let movies = [{
        "id": 1,
        "name": "3 idiots"
    }, {
        "id": 2,
        "name": "super 30"
    }, {
        "id": 3,
        "name": "Bahubali"
    }, {
        "id": 4,
        "name": "Bahubali 2"
    }]

    res.send(movies)

})




router.get('/films/:indexNumber', function (req, res) {
    let movies = [{
        "id": 1,
        "name": "3 idiots"
    },
    {
        "id": 2,
        "name": "super 30"
    },
    {
        "id": 3,
        "name": "Bahubali"
    },
    {
        "id": 4,
        "name": "Bahubali 2"
    }]

    let index = req.params.indexNumber;
    if (index > movies.length) {
        return res.send("no movie exist with this id")
    } else {
        res.send(movies[index])
    }
})



module.exports = router;
// adding this comment for no reason
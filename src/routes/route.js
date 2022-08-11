const express = require('express');
const router = express.Router();




let players = [
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ]
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ]
    },
]




// router.post('/players', function (req, res) {

//     let player1 = req.body


//     for (i = 0; i < players.length; i++) {
//         let obj = players[i]

//         if (obj.name === player1.name) {
//             return res.send("try another player's name")

//         }
//      }
//      players.push(player1)

//         res.send({ data: players, status: true })
// })



// module.exports = router;





let persons = [
    {
        name : "pk",
        age : 10,
        votingstatus : false
    },
    {
        name : "SK",
        age : 20,
        votingstatus : false
    },
    {
        name : "AA",
        age : 70,
        votingstatus : false
    },
    {
        name : "SC",
        age : 5,
        votingstatus : false
    },
    {
        name : "HO",
        age : 40,
        votingstatus : false
    }
]


router.post('/votingage', function (req, res) {
     let arr = [];
     let age1 = req.query.age;
     for(i=0; i<persons.length; i++){
        if(persons[i].age>age1){
            persons[i].votingstatus=true;
        arr.push(persons[i])
        }
       
     }
     res.send(arr);
    })


module.exports = router;
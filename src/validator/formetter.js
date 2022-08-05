
let lowText = function(){
    const a = "MY FIRST ASSIGNMENT ON NODEJS"

    const result = a.toLowerCase()
    console.log (result)
} 

let uppText = function(){
    const a = "my first assignment on nodejs"

    const result1 = a.toUpperCase()
    console.log (result1)
} 





module.exports.lowText = lowText
module.exports.uppText = uppText



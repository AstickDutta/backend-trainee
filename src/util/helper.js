let printDate = function(){
    const date1 = new Date().getDate()

console.log(date1)

}

let printMonth = function(){
    const month1 = new Date().getMonth() + 1

console.log(month1)

}
let batch1 = function(){
let wk = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const day1 = new Date();
     let day = wk[day1.getDay()];
   console.log(`Plutonium, week3 ${day}, the topic for today is Nodejs module system`);

}

module.exports.printDate = printDate
module.exports.printMonth  = printMonth 
module.exports.batch1 = batch1
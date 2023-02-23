const fs = require('fs');
console.log('start');

//async function...
fs.readFile("f1.txt",giveMeData);

function giveMeData(error,data){
    console.log("I am inside a callback funtion !!!!!");
    console.log(data + " ");
}

console.log("I am here");
console.log("I am there");
console.log("finish");
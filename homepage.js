//npm install
//async function callback pass hoga...

const request = require("request");
const fs = require('fs');

//async

request("https://www.espncricinfo.com/", getData);

function getData(error , response , body){
    console.log(body);
    fs.writeFileSync('cricket.html',body);
}
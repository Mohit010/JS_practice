const fs = require('fs');

const cheerio = require('cheerio');

let getData = fs.readFileSync('old.html');

let ch = cheerio.load(getData);
let hE = ch('p').text();

// console.log(hE);

// let pinside = ch("ul li p").text();
// console.log(pinside);

let all = ch(".main").text();
let length = ch(".main").length;
console.log(length);
// console.log(all);
const fs = require('fs');
const cheerio = require('cheerio');

let data = fs.readFileSync('old.html');
// console.log(data + "");

let ch = cheerio.load(data);

// let h1Element = ch("h1");
// let h1Element = ch("h1").text();
let h1Element = ch("p").text();

//<h1> heading h1 </h1> => object form

console.log(h1Element);
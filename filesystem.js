let fs = require('fs');
let data = fs.readFileSync('abc.txt');
// console.log(data);
console.log(data.toString());
let wdata = 'This is the text which i want to write';
fs.writeFileSync('write.txt',wdata);
let newdata = "This is the second test";
fs.writeFileSync('secondTest.txt',newdata);
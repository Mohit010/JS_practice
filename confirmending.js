let str = ['I','am','Iron','man'];
let key = 'an';
let lstr = str[str.length-1];
console.log(lstr);

let ltc = lstr.slice(1);
console.log(ltc);
if(ltc == key){
    console.log(true);
}
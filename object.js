// let obj = {};
// console.log(obj);

let newobj = {
    name : 'Tony',
    lastname : 'wikcs',
    age : '100years',
    friends : ['Shawn','Ethan','Luther']
}

// console.log(newobj);
// console.log(newobj.age);
// console.log(newobj['friends']['0']);

let karr = Object.keys(newobj);
console.log(karr);
// for(let key in newobj){
//     console.log(newobj);
// }

for(let i=0;i<karr.length;i++){
    let key = karr[i];
    console.log(newobj[karr[i]]);
}
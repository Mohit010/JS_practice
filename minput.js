function add(a){
    for(let i=0;i<a.length;i++){
        console.log(parseInt(a[i]) + 2);
    }
}
let input = process.argv.slice(2);
add(input);
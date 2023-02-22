a = [5,1,8,9,1,18,1,1];
let key = 1;

function index(a,key){
    let first = -1;
    let last = -1;

    for(let i=0;i<a.length;i++){
        if(a[i] == key){
            console.log("first" + " " + i);
            break;
        }
    }
    for(let i=a.length-1;i>=0;i--){
        if(a[i] == key){
            console.log("last" + " " + i);
            break;
        }
    }

}

index(a,key);
let a = [12,5,3,9,10,23];

function arr(dead){
    let max = 0;
    for(let i=0;i<a.length;i++){
        if(a[i] > max){
            max = a[i];
        }
    }
    return max;
    //  console.log(dead);
    //  console.log(max + " " +  "is the maximum element in array");
    //  console.log(min + " " +  "is the minimum element in array");
    }

let max = arr(a);
console.log(max);
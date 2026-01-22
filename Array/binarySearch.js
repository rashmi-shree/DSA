const arr = [1,2,3,5,6,7,8,9]
const target = 3;

function binary(arr, target){

let fp = 0
let sp = arr.length -1 

while(fp <=sp){

    let mp = Math.floor((fp+sp)/2)

    if(arr[mp] === target){
        return (mp);
    }else if(target>arr[mp]){
        fp=mp+1
    }else{
        sp=mp-1
    }
}
return (-1);
}
console.log(binary(arr, target));
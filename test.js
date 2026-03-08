const arr = [1,2,3,5,6,7,8,9]
const target = 3;

function binarySearch(arr, target){
    let fp =0;
    let sp = arr.length -1
    while(fp<=sp){
        let mp = Math.floor((fp+sp)/2)

        if(arr[mp] === target){
            return mp
        }else if (arr[mp]< target){
            fp = mp+1
        }else{
            sp = mp -1
        }
    }
return -1
}

console.log(binarySearch(arr, target));
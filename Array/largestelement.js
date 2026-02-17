let arr = [3, 2, 1,5,2]

function largest (arr){
    let largest = -Infinity

    for (let i =0 ; i<arr.length; i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }
    return largest;
}
console.log(largest(arr));



// let largest = arr[0]

// for (let i =0; i<arr.length; i++){
//     if(arr[i]>largest){
//         largest = arr[i]
//     }
// }
// console.log("largest", largest);

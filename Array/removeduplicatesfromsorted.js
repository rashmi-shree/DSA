let arr= [1,2,3,3,4,5,5,6,7]

// const removeDuplicates = [...new Set(arr)]

// console.log(removeDuplicates);

// two pointer approach

function removeDuplicates(arr){
    let i = 0;
    for (let j = 1; j<arr.length; j++){
        if(arr[j]!= arr[i]){
            arr[i+1] = arr[j]
            i++;
        }
    }
    return i+1
}
console.log(removeDuplicates(arr));
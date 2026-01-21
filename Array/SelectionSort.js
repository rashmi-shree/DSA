let arr = [ 7, 12, 9, 11, 3]

for(let i = 0;i<arr.length ; i++){
    minIndex = i
    for(let j = i+1; j<arr.length; j++){
        if(arr[j]<arr[minIndex]){
            minIndex = j
        }
    }

    if(minIndex != i){
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
}
console.log(arr)
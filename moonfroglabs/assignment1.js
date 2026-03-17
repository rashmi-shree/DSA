let file = ["dog", "bat", "rat", "sheep", "cat", "pen", "rubber", "dog", "laptop", 
    "dog", "pen", "bottle", "watch", "water", "cat", "pen", "dog"]


let arr1 = [0, 7, 9, 16] 
let arr2 = [4, 14]

function minDistance(arr1, arr2){
    let i = j = 0;
    let min = Infinity;

    while(i<arr1.length && j<arr2.length){
        let diff = Math.abs(arr1[i] - arr2[j])
        min = Math.min(min, diff);

        if(arr1[i]<arr2[j]){
            i++
        }else{
            j++
        }
    }
    return min-1
}

console.log(minDistance(arr1, arr2));

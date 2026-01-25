function Arrayreverse(arr, left, right){
    if(left > right) return

    [arr[left], arr[right]] = [arr[right], arr[left]]
    Arrayreverse(arr, left+1, right -1)
}

let arr = [ 1,2,3,4,5]
Arrayreverse(arr, 0, arr.length-1)

console.log(arr);


let arr = [1,2,3,4,5,6,7]
let d =3 
let temp = arr.slice(0,3)

for (let i = d ; i<arr.length; i++){
    arr[i-d] = arr[i]
}
j =0 
for (let i = arr.length -d; i<arr.length ; i++){
    arr[i] = temp[j]
    j++
}

console.log(arr);

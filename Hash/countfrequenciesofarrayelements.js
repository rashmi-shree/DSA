// hashing - pre storing / fetching 
// Counting frequencies of array elements can be done either with objects or with map

let arr = [1, 2, 2, 3, 3, 3, 4];
// let freq = {}

// for(let i =0; i<arr.length; i++){
//     if(freq[arr[i]] === undefined){
//         freq[arr[i]]=1
//     }else{
//         freq[arr[i]]++
//     }
// }

// console.log(freq);

//using map

let freq = new Map();

for (let num of arr){
    freq.set(num, (freq.get(num) || 0) + 1)
}

console.log(freq);

let arr =[1,2,4,7,7,5]

let largest = arr[0], secondLargest = -1;

for (let i =0 ; i< arr.length; i++){
    if(arr[i]>largest   ){
        secondLargest = largest
        largest = arr[i]
    }
    else if (arr[i] < largest && arr[i] > secondLargest) {
        secondLargest = arr[i];
    }
}
console.log(secondLargest);

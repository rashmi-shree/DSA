 let arr = [1,0,2,3,2,0,0,4,5,1]

 j = -1

 for (let i =0;i<arr.length; i++){
    if (arr[i] == 0){
        j=i
        break
    }
 }

 for (let i = j+1; i<arr.length ; i++){
    if(arr[i]!=0){
        [arr[i], arr[j]] = [arr[j], arr[i]]
        j++
    }
 }

 console.log(arr);
 
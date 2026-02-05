let arr = [4,7,9,0,1,2], target = 0
let flag =0;
for (let i = 0 ; i<arr.length; i++){
    if (target === arr[i]){
        flag = 1
    }
}

if(flag == 1){
    console.log(true);
    
}
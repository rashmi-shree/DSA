let arr = [1,2,3,3,4,6]
let flag ;
for (let i =1 ; i < arr.length ; i++){
    if(arr[i]>=arr[i-1]){
        flag = true;
    }else{
        flag  = false;
        break;
    }
}

if(flag == true){
    console.log("yay");
}else{
    console.log("nay");
    
}
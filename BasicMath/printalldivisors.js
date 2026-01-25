n = 36 

// for(let i =0 ; i<n ; i++){
//     if(n%i == 0){
//         console.log(i);
        
//     }
// }


for(let i = 0 ;i<Math.sqrt(n); i++){
    if(n%i == 0){
        console.log(i);
        if(n/i != i){
            console.log(n/i);
        }
        
    }
}
// prime number - that has exactly 2 factors 1 and itself 
// ex:- 11, 13, 5 - prime  
// non prime - 4, 8
let n=11;
let count;
for (let i =1 ; i<n ;i++){
    if(n%i === 0){
        count++
    }
    if (count ==2){
        console.log("non prime");
    }else{
        console.log("prime");
        
    }
}
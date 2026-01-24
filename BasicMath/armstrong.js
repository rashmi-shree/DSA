n = 371
// n =35

let og = n
let sum = 0;
while ( n>0){
    let lastDigit = n%10
    sum = sum+(lastDigit*lastDigit*lastDigit)
    n = Math.floor(n/10)
}

if(og === sum){
    console.log("yes armstrong");   
}
else{
    console.log("no armstrong");
    
}
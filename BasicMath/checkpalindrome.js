n = 1213
let original = n
let reverse = ""
while(n>0){
    let lastdigit = n%10;
    reverse = reverse + lastdigit
    n = Math.floor(n/10)
}

if ( original === Number(reverse) ){
    console.log("yes palindrome");
    
}else{
    console.log("not a palindrome");
    
}
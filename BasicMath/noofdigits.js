n = 7789

function noofdigits(n){
    count = 0;
    while ( n> 0){
        let lastDigit = n%10
        count = count +1
        n=Math.floor(n/10)
    }
    
    return (count);
}

console.log(noofdigits(n));
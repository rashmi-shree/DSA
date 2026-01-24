n = 7789

let reverse = ""
while(n>0){
    let lastdigit = n%10;
    reverse = reverse + lastdigit
    n = Math.floor(n/10)
}

console.log(reverse);

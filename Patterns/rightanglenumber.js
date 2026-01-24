// 1
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5

let output = ""
for(let i = 0 ; i<5 ; i++){
    for (let j =1 ; j<=i+1; j++){
        output += j
    }
    output += "\n"
}

console.log(output);

// when a function calls itself until a specific condition is met

let count = 0 ;

function printoutput(count){
    if(count === 3) return 
    console.log(count);
    
    count++
    printoutput(count)
}

printoutput(count)
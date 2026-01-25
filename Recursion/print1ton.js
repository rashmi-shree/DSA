let n = 4

function oneton(i,n){
    if(i>n) return 
    console.log(i);
    oneton(i+1,n)
    
}

oneton(1,n) 
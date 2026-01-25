let n = 4

function nto1(n){
    if(n<1) return
    console.log(n);
    nto1(n-1)
}

nto1(n)
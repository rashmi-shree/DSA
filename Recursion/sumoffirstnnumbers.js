function sumofn(n){
    if(n===0) return 0

    return n+sumofn(n-1)
}
console.log(sumofn(5));
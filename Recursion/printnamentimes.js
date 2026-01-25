let n =5;
let personName = "rashmi";
function printname(i,n, name){
    if(i>n) return
    console.log(name);
    printname(i+1,n,name)
}

printname(1, n, personName);

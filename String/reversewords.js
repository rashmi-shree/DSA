let str = "Rashmi";


function reverseStr(str){
    if(str<=1) return str

    return reverseStr(str.slice(1)) + str[0]
}

console.log(reverseStr(str));
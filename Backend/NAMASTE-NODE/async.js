const fs = require('fs');
const https = require("https")

console.log("Hello World");

var a = 1078698;
var b = 20986;

https.get("https://dummyjson.com/products/1", (res)=>{
    console.log("fetched data successfully");  
})

setTimeout(()=>{
    console.log("set timeout called after 5 seconds");
}, 5000)

fs.readFile("./file.txt", "utf8", (err,data)=>{
    console.log("File data", data);
})

function multiplyFn(a,b){
    const res = a*b
    return res ;
}
console.log(multiplyFn(a,b));
// transform an element, 

const arr = [5,1,3,2,6]
//.map
// double = [10,2,6,4,12]
//triple = [15,3,9,6,18]
//binary = ["101","1", "11", "10", "110"]

// function double(n){
//     return n*2
// }
// function triple(n){
//     return n*3
// }
// function binary(n){
//     return n.toString(2)
// }

// const output = arr.map(binary)

// console.log(output);


// .filter

// filter odd numbers inside the array 

// function isOdd(n){
//     return n%2
// }

// const output = arr.filter(isOdd)
// console.log(output);

// const output1 = arr.filter(x => x>4) 
// console.log(output1);

// .reduce - find the largest number inside the array 

//find sum 

// const output = arr.reduce(function(acc, curr){
//     acc = acc+curr
//     return acc
// }, 0)

// console.log(output);


//find max 

const output = arr.reduce(function(acc, curr){
    if(curr>acc){
        acc=curr
    }
    return acc
},0)

console.log(output);

const users = [
    {firstName:"akshay", lastName:"saini", age:26},
    {firstName:"akshay1", lastName:"saini1", age:75},
    {firstName:"akshay2", lastName:"saini2", age:50},
    {firstName:"akshay3", lastName:"saini3", age:26}
]

const output1 = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age]
    }
    else{
        acc[curr.age] = 1
    }
    return acc
},{})

console.log(output1);

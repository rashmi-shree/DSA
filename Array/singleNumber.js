function SingleNumber(nums){

    const freq =  nums.reduce((acc, curr)=>{
        if (acc[curr] === undefined) {
            acc[curr] = 1
        } else {
            acc[curr] = acc[curr] + 1
        }
        return acc
    },{})

    for (let key in freq){
        if(freq[key] === 1){
            return Number(key)
        }
    }
}

let nums = [4,1,2,1,2]
console.log(SingleNumber(nums));

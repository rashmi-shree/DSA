function maxConsecutive1(nums){
    let count = 0 , max = 0;

    for(let i =0 ; i<nums.length; i++){
        if(nums[i] == 1){
            count++
            max = Math.max(max,count)
        }else{
            count = 0 
        }
    }
    return max;
}

let nums = [1,1,0,1,1,1]

console.log(maxConsecutive1(nums));

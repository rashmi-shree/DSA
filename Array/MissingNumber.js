function Missingnumber(nums) {
    let maxi = 0 , sum = 0 ;

    for (let i = 0 ; i<nums.length; i++){
        sum = sum+nums[i]
        maxi = Math.max(nums[i], maxi)
    }
    
    let temp=(maxi*(maxi+1))/2
    let o = temp - sum
    return o;
};
let nums = [9,6,4,2,3,5,7,0,1];
console.log(Missingnumber(nums));    
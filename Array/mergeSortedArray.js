let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;

function mergeSorted(nums1, m, nums2, n){
    for (let i =0 ; i<n; i++){
        nums1[m+i]=nums2[i]
    }
    nums1.sort((a,b)=> a-b)
    return nums1
}

console.log(mergeSorted(nums1, m, nums2, n));

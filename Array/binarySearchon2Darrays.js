let mat = [[3,4,7,9], [12,13,16,18], [20,21,23,29]]
let target = 23;

function bs(arr, target){
    let low = 0 ;
    let high = arr.length - 1;

    while (low <= high){
        let mid = Math.floor((low + high)/2)
        
        if(target == arr[mid]){
            return true
        }else if(target > arr[mid]){
            low = mid + 1
        }else {
            high = mid -1 
        }
    }
}
function matrix(mat, target){
    let n = mat.length;
    let m = mat[0].length;

    for (let i =0 ; i<n;i++){
        if(target > mat[i][0] && target < mat[i][m-1]){
            return bs(mat[i],target)
        }
    }
    return false

}    

console.log(matrix(mat, target));

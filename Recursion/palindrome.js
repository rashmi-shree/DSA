function isPalindrome(str, left, right){
    if(left >= right) return true;

    if(str[left]!=str[right]) return false

    return isPalindrome(str, left+1, right-1)
}

let s = "madam";

console.log(isPalindrome(s, 0 , s.length-1));

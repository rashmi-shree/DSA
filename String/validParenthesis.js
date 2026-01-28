let str = "(*))"
function validParenthesis(str, index, count){
    let n = str.length
    if (count < 0) return false 

    if (index === n){
        return (count === 0);
    }

    if (str[index] === '('){
        return validParenthesis(str, index+1, count + 1)
    }
    if (str[index] === ')'){
        return validParenthesis(str, index+1, count -1)
    }
    if (str[index] === "*"){
        return validParenthesis(str, index+1, count +1) || validParenthesis(str, index+1, count -1 ) || validParenthesis(str, index+1, count )
    }
}

console.log(validParenthesis(str, 0, 0));

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
let strs = ["eat","tea","tan","ate","nat","bat"]

var groupAnagrams = function(strs) {
   let res = {}
   for (s of strs){
    let sortedString = s.split('').sort().join('')
    if(!res[sortedString]){
        res[sortedString]=[]
    }
    res[sortedString].push(s)
   }
   return (Object.values(res));
   
};
console.log(groupAnagrams(strs));




//  let temp = []
//     let tempcopy= []
//     let finalarray=[]
//     for (let i = 0 ; i< strs.length; i++){
//         for (let j = i+1 ; j<strs.length ; j++){
//             if (tempcopy.includes(i)){
//                 i++
//             }else{
//                 temp.push(strs[i])
//                 if (anagram(strs[i], strs[j])){
//                     temp.push(strs[j])
//                 }
//                 tempcopy =[...temp]
//                 finalarray.push(temp)
//                 temp=[]
//             }
//         }
//     }
    
    
    
//     function anagram(s, t){
//         let map = {}
//         for(i of s){
//             map[i]!= undefined ? map[i] = map[i]+1 : map[i]=1
//         }
//         for (i of t){
//             if(!map[i]){
//                 return false
//             }
//             --map[i]
//         }
//         return true
//     }
//     return finalarray;
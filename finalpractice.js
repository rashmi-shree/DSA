//Heap
// class MinHeap{
//     constructor(){
//         this.heap=[]
//     }
//     getLeftChildIndex(i){
//         return (2*i)+1
//     }
//     getRightChildIndex(i){
//         return (2*i)+2
//     }
//     getParentIndex(i){
//         return Math.floor(i-1/2)
//     }
//     insert(val){
//         //insert at the end and do heapify up
//         this.heap.push(val)
//         let lastIndex = this.heap.length -1
//         this.heapifyUp(lastIndex)
//     }
//     heapifyUp(i){
//         while(i>0){
//             let parentIndex = this.getParentIndex(i)
//             if(this.heap[parentIndex] < this.heap[i]){
//                 [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]]
//                 i= parentIndex
//             }else{
//                 break
//             }
//         }
//     }
//     extract(){
//         if(this.heap.length <1) return null;
//         let min = this.heap[0]
//         let lastIndex =this.heap.length -1

//         [this.heap[min], this.heap[lastIndex]] = [this.heap[min], this.heap[lastIndex]]
//         this.heap.pop()
//         this.heapifyDown(0)
//         return min

//     }
//     heapifyDown(i){
//         let left = this.getLeftChildIndex(i)
//         let right = this.getRightChildIndex(i)
//         let n = this.heap.length;

//         let smallest = i 

//         if(left <n && this.heap[left] < this.heap[smallest]){
//             smallest = left
//         }
//         if(right<n && this.heap[right]<this.heap[smallest]){
//             smallest = right;
//         }
//         if(smallest !=i){
//             [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]]
//             this.heapifyDown(smallest)
//         }
//     }
//     peek(){
//         if(!this.heap.length) return null;
//         return this.heap[0]
//     }
// }
// Binary search

// sqrt(x)

// let x = 8

// if(x<2) console.log(x);

// let left = 2
// let right = x/2

// while(left < right){
//     let middle = Math.floor((left + right)/2)
//     if(x == middle**2){
//         console.log(middle);
//         break
//     }else if (x<middle**2){
//         right = middle-1
//     }else{
//         left = middle+1
//     }
// }
// console.log(right);


// Two sum give all the 2 values,
//  let nums = [2,7,11,15, 6,4,3];
//  let target = 9

// let result = []
// let seen = new Set()

// for (let num of nums){
//     let complement = target -num

//     if(seen.has(complement)){
//         result.push([complement, num])
//     }
//     seen.add(num)
// }
// console.log(result);




//  Find the Index of the First Occurrence in a String
// let haystack = "isadbutsad", needle = "sad";
// function Occurrence(haystack, needle){
//     let m = haystack.length;
//     let n = needle.length;
//     let left = 0
//     while(left <= m-n ){
//         let found = true
//        for(let i = left; i< left +n ; i++){
//             if(haystack[i] != needle[i - left]){
//                 found = false
//                 break
//             }
//         }
//         if(found) return left
//         left++
//     }
//     return -1
// }
// console.log(Occurrence(haystack, needle));



// Is Subsequence
// let s = "abc", t = "ahbgdc";

// function isSubsequence(s,t){
//     if(s.length === 0 )return true

//     let i = j = 0;

//     while(j<t.length){
//         if(s[i] != t[j]){
//             j++
//         }else{
//             i++
//             j++
//         }
//         if(i== s.length) return true
//     }
//     return false
// }

// console.log(isSubsequence(s,t));

// two sum - input array is sorted
// let nums = [2,7,11,15], target = 9;

// let left = 0;
// let right = nums.length -1 ;
// function twosum(nums, target){
//     while(left<=right){
//         let sum = nums[left] + nums[right]
//         if(sum>target){
//             right--
//         }else if(sum<target){
//             left++
//         }else{
//             return [left,right];
//         }
//     }
// }

// console.log(twosum(nums, target));



// implement queue using stacks

// class Queue{
//     constructor(){
//         this.s1 = []
//         this.s2 = []
//     }
//     enqueueData(val){
//         this.s1.push(val)
//     }
//     dequeueData(){
//         if(this.s2.length == 0){
//             while(this.s1.length){
//                 this.s2.push(this.s1.pop())
//             }
//         }
//         return this.s2.pop()
//     }
//     peekData(){
//         if(this.s2.length == 0 ){
//             while(this.s1.length){
//                 this.s2.push(this.s1.pop())
//             }
//         }
//         return this.s2[this.s2.length -1]
//     }
//     empty(){
//         return this.s1.length === 0 && this.s2.length === 0 
//     }
// }

// const q1 = new Queue()
// q1.enqueueData(1)
// q1.enqueueData(2)
// q1.enqueueData(3)
// q1.enqueueData(4)
// q1.dequeueData()
// console.log(q1.empty());

// console.log(q1);



//build Stack using two q's

// class Stack{
//     constructor(){
//         this.q = []
//         // this.q1 = []
//         // this.q2 = [] 
//     }
//     //push
//     pushData(val){
//         // this.q1.push(val)
//         this.q.push(val)
//     }
//     //pop
//     popData(){
//         // let n = this.q1.length
//         let n = this.q.length

//         for(let i = 0 ; i< n-1; i++){
//             this.q.push(this.q.shift())
//         }
//         let ans = this.q.shift()
//         return ans
//     }
//     //top
//     topData(){
//         // let n = this.q1.length
//         let n = this.q.length
//         for(let i=0; i<n-1; i++){
//             this.q.push(this.q.shift())
//         }
//         let top = this.q[0]
//         this.q.push(top)
//         return top
//     }
//     //empty
//     empty(){
//         // return this.q1.length === 0
//         return this.q.length === 0
//     }
// }
// const s1 = new Stack()
// s1.pushData(1)
// s1.pushData(2)
// s1.pushData(3)
// s1.pushData(4)
// s1.popData()
// console.log(s1.empty());

// console.log(s1);

// // Design Linked List
// class Node{
//     constructor(val){
//         this.val = val
//         this.next = null
//     }
// }
// class LinkedList{
//     constructor(head){
//         this.head = head
//         this.size = 0
//     }
//     get(index){
//         if(index <0 || index >=this.size) return -1

//         let curr = this.head
//         for(let i = 0 ; i<index; i++){
//             curr = curr.next
//         }
//         return curr.val
//     }
//     addAtBeginning(val){
//         let newNode = new Node(val)
//         newNode.next = this.head
//         this.head = newNode
//         this.size++
//     }
//     addAtEnd(val){
//         let newNode = new Node(val)
//         if(!this.head){
//             this.head = newNode
//             this.size++
//             return
//         }
//         let curr =this.head
//         while(curr.next){
//             curr =curr.next
//         }
//         curr.next = newNode
//         this.size++
//     }
//     addAtIndex(val, index){
//         if(index < 0 || index>=this.size) return -1

//         if(index == 0){
//             this.addAtBeginning(val)
//             return
//         }
//         if(index == this.size){
//             this.addAtEnd(val)
//             return
//         }
//         let newNode = new Node(val)
//         let curr = this.head;
//         for(let i = 0; i<index; i++){
//             curr = curr.next
//         }
//         newNode=curr.next
//         curr.next = newNode
//         this.size++
//     }
//     deleteAtIndex(index) {
//         if(index<0 || index >=this.size) return -1
//         if(index == 0){
//             this.head == this.head.next
//         }else{
//             let curr =  this.head

//             for(let i = 0; i<index; i++){
//                 curr = curr.next
//             }
//             if(curr.next){
//                 curr.next = curr.next.next
//             }
//         }
//         this.size--
//     }
//     display(){
//         let displayarr= []
//         let curr = this.head
//         while(curr){
//             displayarr.push(curr.val)
//             curr = curr.next
//         }
//         return displayarr
//     }
//     getMiddleNode(){
//         let slow = this.head
//         let fast = this.head

//         while(fast.next != null && fast.next.next != null){
//             slow = slow.next
//             fast = fast.next.next
//         }
//         return slow.val
//     }
//     reverseLL(){
//         let prev = null
//         let curr = this.head
        
//         while(curr){
//             let temp = curr.next
//             curr.next = prev
//             prev = curr
//             curr =temp
//         }
//         return prev
//     }
//     llCycleUsingHash(){
//         let curr = this.head;
//         let seenNodes = new Set()
//         while(curr != null){
//             if(seenNodes.has(curr)){
//                 return true
//             }
//             seenNodes.add(curr)
//             curr = curr.next
//         }
//         return false
//     }
//     llCycleUsingFloyds(){
//         if(this.head == null) return false

//         let slow = this.head;
//         let fast = this.head.next;

//         while(slow!= fast){
//             if(fast == null || fast.next == null){
//                 return false
//             }
//             slow = slow.next
//             fast = fast.next.next
//         }
//         return true
//     }
// }
// const ll1 = new LinkedList()
// ll1.addAtEnd("A")
// ll1.addAtEnd("B")
// ll1.addAtEnd("C")
// ll1.addAtEnd("D")
// ll1.addAtEnd("E")
// ll1.addAtEnd("F")
// // console.log(ll1.getMiddleNode());


// console.log(ll1.display());
// console.log(ll1.reverseLL());

// ******************************


// factorial of n
// let n =5
// function fact(n){
//    if(n == 1) return 1
//    return n* fact(n-1)
// }
// console.log(fact(n));


// sum of all values in an array using recursion 

// let arr =[5,3,2,0,1]

// function sum(n){
//     if(n==0) return arr[0]
//     return arr[n]+sum(n-1)
// }
// console.log(sum(arr.length -1));


// sum of first n numbers using recursion 
// function recsum(n){
//     if(n<1) return n
//     return n + recsum(n-1)
// }
// console.log(recsum(5));

// let n =5;
// let sum =0
// for (let i = 0 ; i< n; i++){
//     sum+=i
// }
// console.log(sum);


// Single number
// let num = [3,3,4]
// let map = {}
// for(let i = 0; i<num.length; i++){
//     map[num[i]] = map[num[i]] ? ++map[num[i]] : 1
// }
// for (let freq in map){
//     if(map[freq]==1){
//         console.log(freq);
        
//     }   
// }


// max consecutive ones
// let n = [1,1,0,1,1,1]

// let maxcount = 0;

// let count  = 0
// for(let i = 0 ; i<n.length ; i++){
//     if(n[i]==1){
//         count++
//         maxcount = Math.max(count, maxcount)
//     }else{
//         count= 0
//     }
// }
// console.log(maxcount);


// move zeroes
// let nums = [0,1,0,3,12]
// let i =0 
// for(let j = 0 ; j<nums.length ; j++){
//     if(nums[j]!=0){
//         [nums[i], nums[j]] = [nums[j], nums[i]]
//         i++
//     }
// }
// console.log(nums);


// merge two sorted arrays
// let nums1 = [1,2,3,0,0,0];
// let m = 3;
// let nums2 = [2,5,6];
// let n = 3
// // Output: [1,2,2,3,5,6]

// let i = 0
// let j = 0

// let output = []
// while(i<m  && j <n){
//     if(nums1[i]<nums2[j]){
//         output.push(nums1[i])
//         i++
//     }else{
//         output.push(nums2[j])
//         j++
//     }
// }
// output = output.concat(nums1.slice(i,m), nums2.slice(j));
// console.log(output);

// reverse string
// let s = ["h","e","l","l","o"]
// let l = 0
// let r = s.length - 1

// while(l <= r){
//     [s[l], s[r]] =[s[r], s[l]]
//     l++
//     r--
// }
// console.log(s);


// remove elements
// let a = [3, 2,2,3] 
// let v= 3 
// let i = 0
// for (let j = 0 ; j<a.length ; j++){
//     if(a[j]!=v){
//         [a[i], a[j]] = [a[j], a[i]]
//         i++
//     }
// }
// console.log(a);

 
// // remove duplicates

// let arr = [0,0,1,1,1,2,2,3,3,4]
// let i = 0 ;
// let j = 1 ;

// while (j<arr.length){
//     if(arr[i] == arr[j]){
//         j++
//     }else{
//         i++
//         [arr[i], arr[j]] = [arr[j], arr[i]]
//         j++
//     }
// }
// console.log(arr);

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // floyd's algorithm (slow pointer and fast pointer)
    if(!head) return false;
    let slow = head;
    let fast = head.next;
    while(slow != fast){
        if(fast === null || fast.next === null){
            return false;
        }
        slow = slow.next;
        fast = fast.next.next
    }
    return true
    
    // using Set 
    // let curr = head;
    // let seenNodes = new Set();
    // while(curr){
    //     if(seenNodes.has(curr)){
    //        return true
    //     }
    //     seenNodes.add(curr)
    //     curr = curr.next
    // }
    // return false
};
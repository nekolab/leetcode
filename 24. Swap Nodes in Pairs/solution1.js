/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let pair1 = head
  let pair2 = pair1?.next
  let curPrev = null
  
  const nextHead = pair2 || pair1
  
  while (pair2) {
    pair1.next = pair2.next
    pair2.next = pair1
    
    if (curPrev) {
      curPrev.next = pair2
    }

    curPrev = pair1
    pair1 = pair1.next
    pair2 = pair1?.next
  }
  
  return nextHead
};

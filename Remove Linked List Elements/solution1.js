/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var prev = null, cur = head;

    while(cur) {
        if (cur.val === val) {
            if (prev) {
                prev.next = cur.next;
            } else {
                head = cur.next;
            }
        } else {
            prev = cur;
        }
        cur = cur.next;
    }

    return head;
};
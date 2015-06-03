/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

    var cur = new ListNode();
    var result = cur;

    while(l1 && l2) {
        if (l1.val < l2.val) {
            cur = cur.next = l1;
            l1 = l1.next;
        } else {
            cur = cur.next = l2;
            l2 = l2.next;
        }
    }

    var rest = l1 || l2;

    if (rest) {
        cur.next = rest;
    } else {
        cur.next = null;
    }

    return result.next;
};
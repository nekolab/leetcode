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
var addTwoNumbers = function(l1, l2) {
    var result = new ListNode(0);
    var cur = result, precur = cur, carry = false;

    do {
        var val = l1.val + l2.val + cur.val;
        cur.val = val % 10;
        carry = val >= 10;

        precur = cur;
        cur = precur.next = new ListNode(carry?1:0);
        carry = false;
        c1 = l1; c2 = l2;
        l1 = l1.next || { val:0, next:null };
        l2 = l2.next || { val:0, next:null };
    } while (c1.next || c2.next);

    if (cur.val === 0) {
        precur.next = null;
    }
    return result;
};
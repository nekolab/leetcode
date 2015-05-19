/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head === null) return head;

    var stack = [];
    var head_ptr = head,
        cur_ptr = head,
        elem = head;

    do {
        stack.push(cur_ptr);
        cur_ptr = cur_ptr.next;
    } while(cur_ptr !== null);

    for (var i = k % stack.length; i >= 1; --i) {
        elem = stack.pop();
        elem.next = head_ptr;
        head_ptr = elem;
    }

    (stack.pop() || head_ptr).next = null;

    return elem;
};
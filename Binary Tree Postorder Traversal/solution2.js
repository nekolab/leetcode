/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (!root) { return []; }
    var cur, result = [], stack = [root];

    while(stack.length) {
        cur = stack.pop();
        result.unshift(cur.val);
        if (cur.left) { stack.push(cur.left); }
        if (cur.right) { stack.push(cur.right); }
    }

    return result;
};
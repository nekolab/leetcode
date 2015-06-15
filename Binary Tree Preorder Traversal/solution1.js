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
var preorderTraversal = function(root) {
    if (!root) { return []; }
    var cur, result = [], stack = [root];

    while(stack.length) {
        cur = stack.pop();
        result.push(cur.val);
        if (cur.right) { stack.push(cur.right); }
        if (cur.left) { stack.push(cur.left); }
    }

    return result;
};
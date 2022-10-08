/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) { return null; }
    var cur, tmp, stack = [root];

    while(stack.length) {
        cur = stack.pop();
        tmp = cur.left;
        cur.left = cur.right;
        cur.right = tmp;
        
        if (cur.left) { stack.push(cur.left); }
        if (cur.right) { stack.push(cur.right); }
    }

    return root;
};
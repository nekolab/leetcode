/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

let balanced = true

var isBalanced = function(root) {
    balanced = true
    getMaxDepth(root)
    return balanced
};

var getMaxDepth = (node) => {
    if (node == null) {
        return -1
    }
    const leftDepth = getMaxDepth(node.left)
    const rightDepth = getMaxDepth(node.right)
    if (Math.abs(leftDepth - rightDepth) > 1) {
        balanced = false
    }
    return 1 + Math.max(leftDepth, rightDepth)    
}
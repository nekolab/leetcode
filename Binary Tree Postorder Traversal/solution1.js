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
    var result = [];
    result = result.concat(postorderTraversal(root.left));
    result = result.concat(postorderTraversal(root.right));
    result.push(root.val);
    return result;
};
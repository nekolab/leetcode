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
    var cur, result = [root.val];

    result = result.concat(preorderTraversal(root.left));
    result = result.concat(preorderTraversal(root.right));

    return result;
};
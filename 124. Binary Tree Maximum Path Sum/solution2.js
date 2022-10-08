/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

let maxPathSumValue = -Infinity

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    maxPathSumValue = -Infinity
    findMaxPath(root)
    return maxPathSumValue
};

const findMaxPath = function(root) {
    const val = root.val
    const left = root.left ? findMaxPath(root.left) : -Infinity
    const right = root.right ? findMaxPath(root.right) : -Infinity
    
    const maxClosedPath = Math.max(left, right, left + val + right)
    const maxOpenPath = Math.max(val, val + left, val + right)
    
    maxPathSumValue = Math.max(maxPathSumValue, maxClosedPath, maxOpenPath)
    
    return maxOpenPath
}

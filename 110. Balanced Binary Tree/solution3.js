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

var isBalanced = function(root) {
  return getMaxDepthWithBalancedInfo(root).balanced
};

var getMaxDepthWithBalancedInfo = (node) => {
  if (node == null) {
      return { depth: -1, balanced: true }
  }
  const left = getMaxDepthWithBalancedInfo(node.left)
  const right = getMaxDepthWithBalancedInfo(node.right)
  
  return {
      depth: 1 + Math.max(left.depth, right.depth),
      balanced: left.balanced && right.balanced && Math.abs(left.depth - right.depth) <= 1
  }
}

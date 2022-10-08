/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (root === null) {
      return null
  }
  
  if (root.val === p.val || root.val === q.val) {
      return root
  }
  
  const leftNodeMatches = lowestCommonAncestor(root.left, p, q)
  const rightNodeMatches = lowestCommonAncestor(root.right, p, q)
  
  if (leftNodeMatches && rightNodeMatches) {
      return root
  }

  return leftNodeMatches || rightNodeMatches
};

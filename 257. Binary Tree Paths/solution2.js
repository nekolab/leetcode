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
 * @return {string[]}
 */

var binaryTreePaths = function(root) {
  const result = []
  traverseTree(root, '', result)
  return result
};

const traverseTree = function(node, prevPath, collections) {
  const currPath = prevPath.length ? `${prevPath}->${node.val}` : `${node.val}`
  
  if (node.left === null && node.right === null) {
      collections.push(currPath)
  } else {
      node.left && traverseTree(node.left, currPath, collections)
      node.right && traverseTree(node.right, currPath, collections)
  }
}

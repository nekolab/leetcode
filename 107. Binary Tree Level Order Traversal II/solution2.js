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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (root === null) { return [] }
  
  const queue = [root, null], result = []
  
  let staging = []

  while (queue.length) {
      const cursor = queue.shift()
      
      if (cursor === null) {
          if (queue.length) {
              queue.push(null)
          }
          result.unshift(staging)
          staging = []
      } else {
          staging.push(cursor.val)
          cursor.left && queue.push(cursor.left)
          cursor.right && queue.push(cursor.right)
      }
  }
  
  return result
};

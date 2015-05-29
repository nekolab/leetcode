/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) { return []; }
    var node, current = [];
    var result = [current], queue = [root, 0xff];
    
    while(queue.length) {
        node = queue.shift();
        if (node == 0xff) {
            if (queue.length) {
                result.push(current = []);
                queue.push(0xff);
            }
            continue;
        }
        if (node.left) { queue.push(node.left); }
        if (node.right) { queue.push(node.right); }
        current.push(node.val);
    }
    
    return result;
};
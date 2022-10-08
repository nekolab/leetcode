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
var zigzagLevelOrder = function(root) {
    if (!root) { return []; }
    var node, current = [], operator = 'push';
    var result = [current], queue = [root, '\0'];

    while(queue.length) {
        node = queue.shift();
        if (node == '\0') {
            if (queue.length) {
                operator = (operator == 'push' ? 'unshift' : 'push');
                result.push(current = []);
                queue.push('\0');
            }
            continue;
        }
        if (node.left) { queue.push(node.left); }
        if (node.right) { queue.push(node.right); }
        current[operator](node.val);
    }

    return result;
};

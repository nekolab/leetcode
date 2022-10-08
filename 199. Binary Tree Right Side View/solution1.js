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
var rightSideView = function(root) {
    var prev, cur, result = [], queue = [root, '\0'];

    while(cur = queue.shift()) {
        if (cur === '\0') {
            result.push(prev.val);
            if (!queue.length) { break; }
            queue.push('\0');
            continue;
        }
        if (cur.left) { queue.push(cur.left); }
        if (cur.right) { queue.push(cur.right); }
        prev = cur;
    }

    return result;
};
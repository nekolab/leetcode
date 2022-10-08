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
var levelOrderBottom = function(root) {
    if (!root) { return []; }

    var cur, queue = [root, '\0'],
        result = [], curLevel = [];
    result.push(curLevel);

    while(queue.length) {
        cur = queue.shift();
        if (cur === '\0') {
            if (!queue.length) { break; }
            curLevel = [];
            result.unshift(curLevel);
            queue.push('\0');
            continue;
        }
        if (cur.left) { queue.push(cur.left); }
        if (cur.right) { queue.push(cur.right); }
        curLevel.push(cur.val);
    }

    return result;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) { return true; }
    var elem1, elem2,
        queue = [root.left, root.right];

    while(queue.length) {
        elem1 = queue.shift();
        elem2 = queue.shift();
        if (!(elem1 || elem2)) { continue; }
        if ((elem1 ? elem1.val : null) !== (elem2 ? elem2.val : null)) { return false; }
        queue.push(elem1 ? elem1.left : null);
        queue.push(elem2 ? elem2.right : null);
        queue.push(elem1 ? elem1.right : null);
        queue.push(elem2 ? elem2.left : null);
    }

    return true;
};
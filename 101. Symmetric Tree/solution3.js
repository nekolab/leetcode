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
        stack1 = [root.left],
        stack2 = [root.right];

    while(stack1.length && stack2.length) {
        elem1 = stack1.pop();
        elem2 = stack2.pop();

        if (!(elem1 || elem2)) { continue; }
        if ((!elem1 && elem2) ||
            (elem1 && !elem2) ||
            (elem1.val !== elem2.val)) {
            return false;
        }

        stack1.push(elem1.right, elem1.left);
        stack2.push(elem2.left, elem2.right);
    }

    return true;
};
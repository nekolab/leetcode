/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    var elem1, elem2, stack1 = [p], stack2 = [q];

    while(stack1.length && stack2.length) {
        elem1 = stack1.pop();
        elem2 = stack2.pop();

        if (elem1 === null && elem2 === null) { continue; }
        if (elem1 === null || elem2 === null) { return false; }
        if (elem1.val !== elem2.val) { return false; }

        stack1.push(elem1.right, elem1.left);
        stack2.push(elem2.right, elem2.left);
    }

    return true;
};
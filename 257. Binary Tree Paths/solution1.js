/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (root === null) { return []; }

    if (root.left === null && root.right === null) {
        return [ root.val + '' ];
    }

    var result = binaryTreePaths(root.left);
    result = result.concat(binaryTreePaths(root.right));

    for (var i = 0; i < result.length; ++i) {
        result[i] = root.val + '->' + result[i];
    }

    return result;
};

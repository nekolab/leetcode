/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

bool _isSymmetric(struct TreeNode *left, struct TreeNode *right) {
    if (!left && !right) { return true; }
    if ((!left && right) || (left && !right) || (left->val != right->val)) { return false; }
    return _isSymmetric(left->left, right->right) && _isSymmetric(left->right, right->left);
}

bool isSymmetric(struct TreeNode* root) {
    if (!root) { return true; }
    return _isSymmetric(root->left, root->right);
}
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int minDepth(struct TreeNode* root) {
    if (root == NULL) { return 0; }

    int left = minDepth(root->left) + 1,
        right = minDepth(root->right) + 1;

    if (root->left == NULL) { return right; }
    if (root->right == NULL) { return left; }

    return left < right ? left : right;
}

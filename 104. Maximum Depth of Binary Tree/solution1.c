/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int maxDepth(struct TreeNode* root) {
    if (!root) { return 0; }

    int leftDepth = maxDepth(root->left) + 1,
        rightDepth = maxDepth(root->right) + 1;

    return leftDepth > rightDepth ? leftDepth : rightDepth;
}

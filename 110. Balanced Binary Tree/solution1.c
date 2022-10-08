/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

int max(int a, int b) {
    return a > b ? a : b;
}

int getMaxDepth(struct TreeNode *node) {
    if (node == NULL) { return 0; }
    return 1 + max(getMaxDepth(node->left), getMaxDepth(node->right));
}

bool isBalanced(struct TreeNode* root) {
    if (root == NULL) { return true; }
    
    int left = getMaxDepth(root->left),
        right = getMaxDepth(root->right);

    if (abs(left - right) > 1) { return false; }

    return isBalanced(root->left) && isBalanced(root->right);
}

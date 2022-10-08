/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int countNodes(struct TreeNode* root) {
    if (!root) { return 0; }
    if (!root->left) { return 1; }
    if (!root->right) { return 2; }

    int leftCount = 1, rightCount = 1;
    struct TreeNode *current = root->left;
    while(current->left) { current = current->left; ++leftCount; }
    current = root->right;
    while(current->left) { current = current->left; ++rightCount;}

    if (leftCount == rightCount) {
        return (1 << leftCount) + countNodes(root->right);
    } else if (leftCount > rightCount) {
        return (1 << rightCount) + countNodes(root->left);
    }
}
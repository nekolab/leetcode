/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
struct TreeNode* buildTree(int* inorder, int inorderSize, int* postorder, int postorderSize) {
    if (inorderSize == 0) return NULL;

    struct TreeNode *root = malloc(sizeof(struct TreeNode));
    root->val = *(postorder + postorderSize - 1);

    int inorderPos = -1;
    while ( *(inorder + ++inorderPos) != root->val );

    root->left = buildTree(inorder, inorderPos, postorder, inorderPos);
    root->right = buildTree(inorder + inorderPos + 1, inorderSize - 1 - inorderPos,
                            postorder + inorderPos, inorderSize - 1 - inorderPos);

    return root;
}
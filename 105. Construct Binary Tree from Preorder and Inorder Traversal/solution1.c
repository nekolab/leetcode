/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
struct TreeNode* buildTree(int* preorder, int preorderSize, int* inorder, int inorderSize) {
    if (inorderSize == 0) { return NULL; }

    struct TreeNode *root = malloc(sizeof(struct TreeNode));
    root->val = *preorder;

    int inorderPos = -1;
    while ( *(inorder + ++inorderPos) != root->val );

    root->left = buildTree(preorder + 1, inorderPos, inorder, inorderPos);
    root->right = buildTree(preorder + 1 + inorderPos, inorderSize - 1 - inorderPos,
                            inorder + 1 + inorderPos, inorderSize - 1 - inorderPos);

    return root;
}

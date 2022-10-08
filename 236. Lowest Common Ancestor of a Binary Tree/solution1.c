/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
struct TreeNode* lowestCommonAncestor(struct TreeNode* root, struct TreeNode* p, struct TreeNode* q) {
    if(root == NULL || root == p || root == q) { return root; }

    struct TreeNode *leftLCA = lowestCommonAncestor(root->left, p, q),
                    *rightLCA = lowestCommonAncestor(root->right, p, q);

    if (leftLCA && rightLCA) { return root; }

    return (leftLCA != NULL) ? leftLCA : rightLCA;
}
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

struct TreeNode *buildTree(int *nums, int start, int end) {
    if (start > end) { return NULL; }
    else if (start == end) { 
        struct TreeNode *node = malloc(sizeof(struct TreeNode));
        node->val = nums[start];
        node->left = node->right = NULL;
        return node;
    } else {
        int mid = (start + end) / 2;
        struct TreeNode *node = malloc(sizeof(struct TreeNode));
        node->val = nums[mid];
        node->left = buildTree(nums, start, mid - 1);
        node->right = buildTree(nums, mid + 1, end);
        return node;
    }
}

struct TreeNode* sortedArrayToBST(int* nums, int numsSize) {
    return buildTree(nums, 0, numsSize - 1);
}
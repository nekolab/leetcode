/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

struct TreeNode *buildTree(struct ListNode **cur, int start, int end) {
    if (start > end) { return NULL; }
    int mid = (start + end) / 2;
    struct TreeNode *root = malloc(sizeof(struct TreeNode));
    root->left = buildTree(cur, start, mid - 1);
    root->val = (*cur)->val;
    *cur = (*cur)->next;
    root->right = buildTree(cur, mid + 1, end);
    return root;
}

struct TreeNode* sortedListToBST(struct ListNode* head) {
    int length = 0;
    struct ListNode *cur = head;
    while(cur) { ++length; cur = cur->next; }
    return buildTree(&head, 0, length - 1);
}
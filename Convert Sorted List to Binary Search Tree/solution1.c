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

struct ListNode *findMiddle(struct ListNode *head) {
    struct ListNode *pre = head, *slow = head, *fast = head;
    while(fast && fast->next && fast->next->next) {
        pre = slow;
        slow = slow->next;
        fast = fast->next->next;
    }
    return pre;
} 

struct TreeNode* sortedListToBST(struct ListNode* head) {
    if (head == NULL) { return NULL; }
    struct TreeNode *root = malloc(sizeof(struct TreeNode));
    if (head->next == NULL) {
        root->val = head->val;
        root->left = root->right = NULL;
        return root;
    }
    struct ListNode *left = findMiddle(head),
                    *mid  = left->next;
    left->next = NULL;
    root->val = mid->val;
    root->left = sortedListToBST(head);
    root->right = sortedListToBST(mid->next);
    return root;
}
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* deleteDuplicates(struct ListNode* head) {
    if (head == NULL) { return NULL; }
    struct ListNode *base = head, *check = head->next;

    while(check != NULL) {
        if (base->val == check->val) {
            check = check->next;
            base->next = check;
        } else {
            base = check;
            check = check->next;
        }
    }

    return head;
}

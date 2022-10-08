/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    struct ListNode *result = NULL;
    result = malloc(sizeof(*result));
    result->val = 0;
    result->next = NULL;

    struct ListNode empty = {0, NULL};

    struct ListNode *cur = result, *pre_cur = result, *c1 = l1, *c2 = l2;
    int carry = 0;

    do {
        int val = l1->val + l2->val + cur->val;
        cur->val = val % 10;
        carry = val / 10;

        pre_cur = cur;
        struct ListNode *next_struct = NULL;
        next_struct = malloc(sizeof(*next_struct));
        next_struct->val = carry;
        next_struct->next = NULL;
        cur = pre_cur->next = next_struct;

        c1 = l1; c2 = l2;

        l1 = (l1->next == NULL) ? &empty : l1->next;
        l2 = (l2->next == NULL) ? &empty : l2->next;
    } while( (c1->next != NULL) || (c2->next != NULL) );

    if (cur->val == 0) {
        pre_cur->next = NULL;
    }

    return result;
}
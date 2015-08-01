/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* removeNthFromEnd(struct ListNode* head, int n) {
    struct ListNode *cursor = head, *target = head;
    int count = 0;
    while(cursor) {
        cursor = cursor->next;
        if (count++ > n) target = target->next;
    }
    if (count > n) {
        target->next = target->next->next;
    } else {
        head = head->next;
    }
    return head;
}

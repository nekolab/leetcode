/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */


struct ListNode *reverse(struct ListNode *head) {
    if (head == NULL || head->next == NULL) { return head; }

    struct ListNode *prev = NULL, *next = NULL;

    while(head) {
        next = head->next;
        head->next = prev;
        prev = head;
        head = next;
    }

    return prev;
}


bool isPalindrome(struct ListNode* head) {
    struct ListNode *slow = head, *fast = head;

    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }

    struct ListNode *second = reverse(fast ? slow->next : slow);

    while(head && second) {
        if (head->val != second->val) { return false; }

        head = head->next;
        second = second->next;
    }

    return true;
}
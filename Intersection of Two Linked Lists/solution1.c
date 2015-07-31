/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode *getIntersectionNode(struct ListNode *headA, struct ListNode *headB) {
    if (headA == NULL || headB == NULL) { return NULL; }
    bool swappedA = false, swappedB = false;
    struct ListNode *pA = headA, *pB = headB;

    while (pA != pB && !((swappedA && pA == headB) && 
                         (swappedB && pB == headA))) {
        pA = pA->next ? pA->next : (swappedA = true, headB);
        pB = pB->next ? pB->next : (swappedB = true, headA);
    }

    if (pA == pB) { return pA; } else { return NULL; }
}

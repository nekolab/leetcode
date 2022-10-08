/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* swapPairs(struct ListNode* head) {
    struct ListNode *nodeA = head,
                    *nodeB = head ? head->next : NULL,
                    *nodePrev = NULL;
    if (nodeB != NULL) { head = nodeB; }

    while (nodeA != NULL && nodeB != NULL) {
        nodeA->next = nodeB->next;
        nodeB->next = nodeA;
        if (nodePrev) { nodePrev->next = nodeB; }

        nodePrev = nodeA;
        nodeA = nodePrev->next;
        nodeB = nodeA ? nodeA->next : NULL;
    }

    return head;
}

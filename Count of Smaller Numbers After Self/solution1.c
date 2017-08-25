/**
 * Return an array of size *returnSize.
 * Note: The returned array must be malloced, assume caller calls free().
 */

typedef struct Node {
    int val;
    int dup;
    int sum;
    struct Node* left;
    struct Node* right;
} Node;

Node* insert(Node* root, int* result, int i, int num, int pathSum) {
    if (root == NULL) {
        root = (Node*)malloc(sizeof(Node));
        root->val = num;
        root->dup = 1;
        root->sum = 0;
        root->left = NULL;
        root->right = NULL;
        result[i] = pathSum;
    } else if (root->val == num) {
        ++root->dup;
        result[i] = pathSum + root->sum;
    } else if (root->val > num) {
        ++root->sum;
        root->left = insert(root->left, result, i, num, pathSum);
    } else {
        root->right = insert(root->right, result, i, num, pathSum + root->dup + root->sum);
    }
    return root;
}

int* countSmaller(int* nums, int numsSize, int* returnSize) {
    *returnSize = numsSize;
    int *result = (int*)malloc(sizeof(int) * numsSize);
    Node* root = NULL;
    for (int i = numsSize - 1; i >= 0; --i) {
        root = insert(root, result, i, nums[i], 0);
    }
    return result;
}

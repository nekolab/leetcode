/**
 * Return an array of size *returnSize.
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* productExceptSelf(int* nums, int numsSize, int* returnSize) {
    *returnSize = numsSize;
    int *result = malloc(sizeof(int) * numsSize);

    int temp = 1;
    for (int i = 0; i < numsSize; ++i) {
        result[i] = temp;
        temp *= nums[i];
    }

    temp = 1;
    for (int i = numsSize - 1; i >= 0; --i) {
        result[i] *= temp;
        temp *= nums[i];
    }

    return result;
}

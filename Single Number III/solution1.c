/**
 * Return an array of size *returnSize.
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* singleNumber(int* nums, int numsSize, int* returnSize) {
    int *result = malloc(sizeof(int) * (*returnSize = 2));
    memset(result, 0, sizeof(int) * *returnSize);

    int xorResult = 0;
    for (int i = 0; i < numsSize; ++i) {
        xorResult ^= nums[i];
    }

    xorResult &= ~(xorResult - 1);
    for (int i = 0; i < numsSize; ++i) {
        if ((nums[i] & xorResult) != 0) {
            result[0] ^= nums[i];
        } else {
            result[1] ^= nums[i];
        }
    }

    return result;
}

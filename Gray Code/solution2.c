/**
 * Return an array of size *returnSize.
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* grayCode(int n, int* returnSize) {
    *returnSize = 1 << n;
    int *result = malloc(sizeof(int) * *returnSize), *cur = result;

    for (int i = 0; i < *returnSize; ++i) {
        *(cur++) = i ^ (i >> 1);
    }

    return result;
}
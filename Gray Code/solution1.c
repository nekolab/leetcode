/**
 * Return an array of size *returnSize.
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* grayCode(int n, int* returnSize) {
    *returnSize = 1 << n;
    int *result = malloc(sizeof(int) * *returnSize);

    int *cur = result;
    *(cur++) = 0;

    for (int i = 0; i < n; ++i) {
        int *back = cur - 1;

        while(back >= result) {
            *(cur++) = *(back--) + (1 << i);
        }
    }

    return result;
}
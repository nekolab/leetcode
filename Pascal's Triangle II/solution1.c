/**
 * Return an array of size *returnSize.
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* getRow(int rowIndex, int* returnSize) {
    int *result = malloc(sizeof(int) * (*returnSize = rowIndex + 1));
    memset(result, 0, sizeof(int) * *returnSize);

    for (int i = 0; i < *returnSize; ++i) {
        result[i] = 1;
        for (int j = i - 1; j > 0; --j) {
            result[j] = result[j] + result[j - 1];
        }
    }

    return result;
}

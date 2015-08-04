/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *columnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** generate(int numRows, int** columnSizes, int* returnSize) {
    *columnSizes = malloc(sizeof(int) * (*returnSize = numRows));
    int **result = malloc(sizeof(int*) * *returnSize);

    for (int i = 0; i < numRows; ++i) {
        result[i] = malloc(sizeof(int) * ((*columnSizes)[i] = i + 1));
        for (int j = 0; j <= i; ++j) {
            int sum = 1;
            if (j != 0 && j != i) {
                sum = result[i - 1][j - 1] + result[i - 1][j];
            }
            result[i][j] = sum;
        }
    }

    return result;
}

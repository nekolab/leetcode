void rotate(int** matrix, int matrixRowSize, int matrixColSize) {    
    for (int i = 0; i < matrixRowSize; ++i) {
        for(int j = 0; j < matrixColSize / 2; ++j) {
            matrix[i][j] ^= matrix[i][matrixColSize - 1 - j];
            matrix[i][matrixColSize - 1 - j] ^= matrix[i][j];
            matrix[i][j] ^= matrix[i][matrixColSize - 1 - j];
        }
    }

    for (int i = 0; i < matrixRowSize - 1; ++i) {
        for (int j = 0; j < matrixColSize - 1 - i; ++j) {
            matrix[i][j] ^= matrix[matrixRowSize - 1 - j][matrixColSize - 1 - i];
            matrix[matrixRowSize - 1 - j][matrixColSize - 1 - i] ^= matrix[i][j];
            matrix[i][j] ^= matrix[matrixRowSize - 1 - j][matrixColSize - 1 - i];
        }
    }
}

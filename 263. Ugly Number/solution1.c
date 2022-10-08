void maxDivide(int *num, int divisor) {
    while (*num > 0 &&
           *num % divisor == 0) {
        *num /= divisor;
    }
}

bool isUgly(int num) {
    maxDivide(&num, 2);
    maxDivide(&num, 3);
    maxDivide(&num, 5);
    return num == 1;
}

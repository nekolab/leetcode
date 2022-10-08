int trailingZeroes(int n) {
    int result = 0;
    for (long i = 5; n / i >= 1; i *= 5) {
        result += n / i;
    }
    return result;
}

int countDigitOne(int n) {
    int result = 0;
    for (long i = 1; i <= n; i *= 10) {
        long p = n / i, q = n % i;
        result += (p + 8) / 10 * i + (p % 10 == 1) * (q + 1);
    }
    return result;
}
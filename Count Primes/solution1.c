int countPrimes(int n) {
    if (n <= 2) { return 0; }
    bool *sieve = malloc(sizeof(bool) * n);
    memset(sieve, 1, sizeof(bool) * n);

    int count = 0;
    for (int i = 2; i < n; ++i) {
        if (sieve[i]) {
            ++count;
            for (long factor = i + 1,
                      j = (long)i * i; j < n; ++factor) {
                sieve[j] = 0;
                j =  factor * i;
            }
        }
    }
    return count;
}

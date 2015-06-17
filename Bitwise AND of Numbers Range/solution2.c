int rangeBitwiseAnd(int m, int n) {
    int i = INT_MAX;
    while ((m & i) != (n & i)) {
        i <<= 1;
    }
    return i & m;
}
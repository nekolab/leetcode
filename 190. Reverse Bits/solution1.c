uint32_t reverseBits(uint32_t n) {
    uint32_t r = 0;

    for (int i = 0; i < 32; ++i) {
        r <<= 1;
        r |= (n & 1);
        n >>= 1;
    }

    return r;
}
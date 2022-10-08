void rca(unsigned short a, unsigned short b, unsigned short cIn,
         unsigned short* cOut, unsigned short* s) {
    *s = a ^ b ^ cIn;
    *cOut = (a & b) | (b & cIn) | (a & cIn);
}

int getSum(int a, int b) {
    size_t intLength = sizeof(int) * 8;
    unsigned int s = 0;
    unsigned short c = 0;
    for (size_t i = 0; i < intLength; ++i) {
        unsigned short bitA = a & 0x1;
        unsigned short bitB = b & 0x1;
        a >>= 1;
        b >>= 1;
        unsigned short sTemp = 0;
        rca(bitA, bitB, c, &c, &sTemp);
        s |= sTemp << i;
    }
    return (int)s;
}

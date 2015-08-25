int missingNumber(int* nums, int numsSize) {
    int t1 = 0, t2 = 0;
    for (int i = 0; i < numsSize; ++i) {
        t1 ^= i;
        t2 ^= nums[i];
    }
    t1 ^= numsSize;
    return t1 ^ t2;
}

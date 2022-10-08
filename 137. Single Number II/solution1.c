int singleNumber(int* nums, int numsSize) {
    int ones = 0, twos = 0, threes = 0;

    for (int i = 0; i < numsSize; ++i) {
        twos |= ones & nums[i];
        ones ^= nums[i];
        threes = ones & twos;
        ones &= ~threes;
        twos &= ~threes;
    }

    return ones;
}

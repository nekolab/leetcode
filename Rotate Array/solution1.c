void rotate(int* nums, int numsSize, int k) {
    int step = k % numsSize;
    if (step == 0) { return; }

    int temp[step], rest = numsSize - step;

    for (int i = 0; i < step; ++i) {
        temp[i] = nums[rest + i];
    }

    for (int i = rest - 1; i >= 0; --i) {
        nums[i + step] = nums[i];
    }

    for (int i = 0; i < step; ++i) {
        nums[i] = temp[i];
    }
}

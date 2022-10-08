int findPeakElement(int* nums, int numsSize) {
    int prev, cur, next;
    for (int i = 0; i < numsSize; ++i) {
        prev = (i - 1 < 0) ? INT_MIN : nums[i - 1];
        cur = nums[i];
        next = (i + 1 >= numsSize) ? INT_MIN : nums[i + 1];
        if (cur > prev && cur > next) { return i; }
    }
    return 0;
}

int findPeakElement(int* nums, int numsSize) {
    if (numsSize <= 1) { return 0; }
    int prev = INT_MIN, cur = nums[0], next = nums[1];
    for (int i = 2; i <= numsSize + 1; ++i) {
        if (cur > prev && cur > next) { return i - 2; }
        prev = cur;
        cur = next;
        next = (i >= numsSize) ? INT_MIN : nums[i];
    }
    return -1;
}

int max(op1, op2) {
    if (op1 > op2) { return op1; }
    return op2;
}

int rob(int* nums, int numsSize) {
    int *dp = malloc(sizeof(int) * numsSize);
    dp[0] = nums[0];
    dp[1] = max(nums[0], nums[1]);
    for (int i = 2; i < numsSize; ++i) {
        dp[i] = max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    return dp[numsSize - 1];
}

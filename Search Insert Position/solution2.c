int searchInsert(int* nums, int numsSize, int target) {
    if (target < *nums) { return 0; }
    if (target > nums[numsSize - 1]) { return numsSize;}
    return search(nums, 0, numsSize - 1, target);
}

int search(int* nums, int low, int high, int target) {
    int mid;
    while (low <= high) {
        mid = low + (high - low) / 2;
        if (nums[mid] < target) {
            low = mid + 1;
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return low;
}

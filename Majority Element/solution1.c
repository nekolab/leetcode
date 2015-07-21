int majorityElement(int* nums, int numsSize) {
    int element = *nums, count = 1;
    for (int i = 1; i < numsSize; ++i) {
        if (count == 0) {
            element = nums[i];
        }
        if (element == nums[i]) {
            ++count;
        } else {
            --count;
        }
    }
    return element;
}

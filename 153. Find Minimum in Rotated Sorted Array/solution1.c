int findMin(int* nums, int numsSize) {
    int *left = nums,
        *mid = nums + (numsSize / 2),
        *right = nums + numsSize - 1;

    while (right - left > 1) {
        if (*mid < * right) {
            right = mid;
        } else {
            left = mid;
        }
        mid = left + (right - left) / 2;
    }

    return *left > *right ? *right : *left;
}

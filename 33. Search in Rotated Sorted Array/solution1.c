int search(int* nums, int numsSize, int target) {
    int *left = nums,
        *mid = nums + (numsSize - 1) / 2,
        *right = nums + numsSize - 1;

    while (right - left > 1) {
        if ((*left < *mid && (target >= *left && target <= *mid)) ||
            (*left > *mid && (target >= *left || target <= *mid))) {
            right = mid;
        } else {
            left = mid;
        }
        mid = left + (right - left) / 2;
    }

    return *left == target ? left - nums :
             *right == target ? right - nums : -1;
}

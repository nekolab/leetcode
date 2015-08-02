int removeDuplicates(int* nums, int numsSize) {
    if (numsSize < 2) { return numsSize; }

    int *base = nums, *compare = nums + 1;
    while (compare - nums < numsSize) {
        if (*base != *compare) {
            *++base = *compare;
        }
        ++compare;
    }

    return base - nums + 1;
}

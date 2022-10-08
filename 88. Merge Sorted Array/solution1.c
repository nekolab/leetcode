void merge(int* nums1, int m, int* nums2, int n) {
    int *curM = nums1 + m - 1,
        *curN = nums2 + n - 1,
        *curMerged = nums1 + m + n - 1;

    while (curMerged >= nums1) {
        if (curN < nums2 || (curM >= nums1 && *curM > *curN)) {
            *curMerged-- = *curM--;
        } else {
            *curMerged-- = *curN--;
        }
    }
}

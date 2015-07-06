int removeElement(int* nums, int numsSize, int val) {
    int read = -1, write = 0;

    while (++read != numsSize) {
        if (*(nums + read) != val) {
            *(nums + write++) = *(nums + read);
        }
    }

    return write;
}

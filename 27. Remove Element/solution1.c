int removeElement(int* nums, int numsSize, int val) {
    int cursor = -1, offset = 0;

    while (++cursor != (numsSize - offset)) {
        if (offset) {
            *(nums + cursor) = *(nums + cursor + offset);
        }
        
        if (*(nums + cursor) == val) {
            ++offset;
            --cursor;
        }
    }

    return numsSize - offset;
}

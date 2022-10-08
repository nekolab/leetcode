int trap(int* height, int heightSize) {
    int maxVal = 0, sum = 0;
    int container[heightSize];

    for (int i = 0; i < heightSize; ++i) {
        if (height[i] > maxVal) {
            maxVal = height[i];
        }
        container[i] = maxVal;
    }

    maxVal = 0;
    for (int i = heightSize - 1; i >= 0; --i) {
        if (height[i] > maxVal) {
            maxVal = height[i];
        }
        sum += (maxVal < container[i] ?
                 maxVal : container[i]) - height[i];
    }

    return sum;
}

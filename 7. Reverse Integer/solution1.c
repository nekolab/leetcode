int reverse(int x) {
    bool negative = x < 0;
    if (negative) { x = -x; }
    int result = 0;

    for (; x != 0; x /= 10) {
        if (result * 10ll != result * 10) { return 0; }
        result = result * 10 + x % 10;
    }

    if (negative) { result = -result; }
    return result;
}

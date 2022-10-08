int addDigits(int num) {
    // Read more: https://en.wikipedia.org/wiki/Digital_root
    return 1 + (num - 1) % 9;
}

int mySqrt(int x) {
    if (x == 0) { return 0; }

    double next = x, prev;

    do {
        prev = next;
        next = (prev + x / prev) / 2;
    } while ( next - prev > 0.1 || next - prev < -0.1 );

    return next;
}

int romanToInt(char* s) {
    int symbol['Y' - 'A'];
    memset(symbol, 0, 'Y' - 'A');

    symbol['I' - 'A'] = 1;
    symbol['V' - 'A'] = 5;
    symbol['X' - 'A'] = 10;
    symbol['L' - 'A'] = 50;
    symbol['C' - 'A'] = 100;
    symbol['D' - 'A'] = 500;
    symbol['M' - 'A'] = 1000;

    int len = strlen(s), prev, cur,
        result = symbol[s[0] - 'A'];

    for (int i = 1; i < len; ++i) {
        cur = symbol[s[i] - 'A'];
        prev = symbol[s[i - 1] - 'A'];

        if (cur <= prev) {
            result += cur;
        } else {
            result -= 2 *prev - cur;
        }
    }

    return result;
}

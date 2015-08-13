int titleToNumber(char* s) {
    int result = 0, len = strlen(s);

    for (int i = 0; i < len; ++i) {
        result += (s[len - 1 - i] - 'A' + 1) * pow(26, i);
    }

    return result;
}

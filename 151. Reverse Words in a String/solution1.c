void reverse(char *s, int begin, int end) {
    while(begin < end) {
        *(s + begin) ^= *(s + end);
        *(s + end) ^= *(s + begin);
        *(s + begin++) ^= *(s + end--);
    }
}

void reverseWords(char *s) {
    int len = strlen(s);

    char currentChar = *s;
    int cur = 0, begin = -1;

    do {
        if (currentChar == ' ') {
            if (begin >= 0) {
                reverse(s, begin, cur - 1);
                begin = -1;
            } else {
                memmove(s + cur, s + cur + 1, len - cur);
                len--; cur--;
            }
        } else if (currentChar == '\0') {
            if (begin >= 0) {
                reverse(s, begin, cur - 1);
            } else { // now *(s + cur - 1) == ' '
                *(s + len-- - 1) = '\0';
            }
            break;
        } else {
            if (begin < 0) {
                begin = cur;
            }
        }
        currentChar = *(s + ++cur);
    } while(1);

    reverse(s, 0, len - 1);
}
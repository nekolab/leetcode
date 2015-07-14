int myAtoi(char* str) {
    char *cur = str;
    static const int kReady = 0,
                     kConvert = 1,
                     kDone = 2;
    long result = 0;
    int symbol = 1, status = kReady;

    do {
        switch(status) {
            case 0:     // kReady
                if (*cur == 43 || *cur == 45) {
                    symbol = 44 - *cur;
                    status = kConvert;
                } else if (*cur >= 48 && *cur <= 57) {
                    result *= 10;
                    result += *cur - 48;
                    status = kConvert;
                } else if (*cur != 32) {
                    status = kDone;
                }
                break;
            case 1:     // kConvert
                if (*cur == 43 || *cur == 45) {
                    result = 0;
                    status = kDone;
                } if (*cur >= 48 && *cur <= 57) {
                    result *= 10;
                    result += *cur - 48;
                    if (result * symbol >= INT_MAX) { return INT_MAX; }
                    if (result * symbol <= INT_MIN) { return INT_MIN; }
                } else {
                    status = kDone;
                }
                break;
        }
        if (status == kDone) { break; }
    } while(*++cur != '\0');

    return result * symbol;
}

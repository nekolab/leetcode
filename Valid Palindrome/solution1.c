bool isCharacter(char *c) {
    return ((*c >= 48) && (*c <= 57)) ||
           ((*c >= 65) && (*c <= 90)) ||
           ((*c >= 97) && (*c <= 122));
}

bool isPalindrome(char* s) {
    int len = -1;
    while (*(s + (++len)) != '\0');

    char *begin = s, *end = s + len - 1;

    while ((end - begin) >= 1) {
        if (!isCharacter(end)) { --end; continue; }
        if (!isCharacter(begin)) { ++begin; continue; }

        if ((*begin != *end) && 
            (*end - *begin) != 32 &&
            (*begin - *end) != 32) { return false; }
        ++begin; --end;
    }
    return true;
}
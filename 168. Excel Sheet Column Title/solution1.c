char* convertToTitle(int n) {
    int size = 1, c = n;
    while(c) { ++size; c = (c - 1) / 26; }
    char *result = malloc(sizeof(char) * size);
    result[size - 1] = '\0';

    for (int i = size - 2; i >= 0; --i) {
        result[i] = ((n - 1) % 26) + 'A';
        n = (n - 1) / 26;
    }

    return result;
}

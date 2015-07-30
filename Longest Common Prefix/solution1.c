char* longestCommonPrefix(char** strs, int strsSize) {
    if (strs == NULL || *strs == NULL || **strs == '\0') { return ""; }
    int current_index = -1;
    char current_char = **strs;
    bool running = true;
    while(running) {
        current_char = strs[0][++current_index];
        for (int i = 0; i < strsSize; ++i) {
            if (strs[i][current_index] == '\0' ||
                current_char != strs[i][current_index]) {
                --current_index;
                running = false;
                break;
            }
        }
    }
    if (current_index < 0) { return ""; }
    char *result = malloc(sizeof(char) * (current_index + 1 + 1));
    memcpy(result, *strs, current_index + 1);
    result[current_index + 1] = '\0';
    return result;
}

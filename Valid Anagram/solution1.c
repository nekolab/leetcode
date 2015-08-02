#define ALPHABET_SIZE 26

bool isAnagram(char* s, char* t) {
    int s_table[ALPHABET_SIZE],
        t_table[ALPHABET_SIZE];
    memset(s_table, 0, ALPHABET_SIZE * sizeof(int));
    memset(t_table, 0, ALPHABET_SIZE * sizeof(int));

    while (*s != '\0') { s_table[*(s++) - 'a'] += 1; }
    while (*t != '\0') { t_table[*(t++) - 'a'] += 1; }

    for (int i = 0; i < ALPHABET_SIZE; ++i) {
        if (s_table[i] != t_table[i]) { return false; }
    }
    return true;
}

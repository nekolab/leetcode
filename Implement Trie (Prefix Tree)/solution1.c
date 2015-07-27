#define ALPHABET_SIZE 26
#define CHAR_TO_INDEX(c) ((int)c - (int)'a')

struct TrieNode {
    bool EOW;   // End of the word
    struct TrieNode *children[ALPHABET_SIZE];
};

/** Initialize your data structure here. */
struct TrieNode* trieCreate() {
    struct TrieNode* root = malloc(sizeof(struct TrieNode));
    memset(root, 0, sizeof(struct TrieNode));
    return root;
}

/** Inserts a word into the trie. */
void insert(struct TrieNode* root, char* word) {
    struct TrieNode **current = &root;
    while (*word != '\0') {
        current = &((*current)->children[CHAR_TO_INDEX(*word)]);
        if (*current == NULL) {
            *current = trieCreate();
        }
        ++word;
    }
    (*current)->EOW = true;
}

/** Returns if the word is in the trie. */
bool search(struct TrieNode* root, char* word) {
    struct TrieNode *node = root;
    while (*word != '\0') {
        node = node->children[CHAR_TO_INDEX(*word)];
        if (node == NULL) { return false; }
        ++word;
    }
    return node->EOW;
}

/** Returns if there is any word in the trie 
    that starts with the given prefix. */
bool startsWith(struct TrieNode* root, char* prefix) {
    struct TrieNode *node = root;
    while (*prefix != '\0') {
        node = node->children[CHAR_TO_INDEX(*prefix)];
        if (node == NULL) { return false; }
        ++prefix;
    }
    return true;
}

/** Deallocates memory previously allocated for the TrieNode. */
void trieFree(struct TrieNode* root) {
    for (int i = 0; i < ALPHABET_SIZE; ++i) {
        if (root->children[i] != NULL) {
            trieFree(root->children[i]);
        }
    }
    free(root);
}

// Your Trie object will be instantiated and called as such:
// struct TrieNode* node = trieCreate();
// insert(node, "somestring");
// search(node, "key");
// trieFree(node);

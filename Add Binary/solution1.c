char* addBinary(char* a, char* b) {

    int v_a = 0, v_b = 0, carry = 0,
        a_len = strlen(a), b_len = strlen(b),
        arr_len = (a_len > b_len ? a_len : b_len) + 2;
    char *result = malloc(arr_len) + arr_len - 1,
         *c_a = a + a_len - 1, *c_b = b + b_len - 1;

    *result = '\0';
    while(!(c_a == a - 1 && c_b == b - 1)) {
        v_a = (c_a == a - 1) ? 0 : (*c_a-- - '0');
        v_b = (c_b == b - 1) ? 0 : (*c_b-- - '0');
        
        *(--result) = (v_a ^ v_b ^ carry) + '0';
        carry = (v_a & v_b) || (carry & (v_a ^ v_b));
    }

    if (carry) { *(--result) = carry + '0'; }

    return result;
}
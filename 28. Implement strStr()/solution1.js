/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var genNext = function(needle) {
    var val = -1, cursor = 0, next = [-1];
    while(cursor < needle.length) {
         if (val === -1 || needle[cursor] === needle[val]) {
             ++val; ++cursor;
             next[cursor] = needle[cursor] != needle[val] ? val : next[val];
         } else {
             val = next[val];
         }
    }
    return next;
};

var strStr = function(haystack, needle) {
    var next = genNext(needle);

    var i = 0, j = 0;
    while (i < haystack.length && j < needle.length) {
        if (j === -1 || haystack[i] === needle[j]) {
            i++; j++;
        } else {
            j = next[j];
        }
    }

    return j === needle.length ? i - j : -1;
};
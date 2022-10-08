/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [], pair = { ')': '(', '}': '{', ']': '[' };
    for (var i = 0; i < s.length; ++i) {
        if (s[i] in pair) {
            if (pair[s[i]] != stack.pop()) { return false; }
        } else {
            stack.push(s[i]);
        }
    }
    return !stack.length;
};

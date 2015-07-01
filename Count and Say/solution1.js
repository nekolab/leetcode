/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var s = '1', result = '1';
    var start = 0, current = 0;

    for (var i = 1; i < n; ++i) {
        result = ''; start = current = 0;
        while(current++ < s.length) {
            if (s[start] !== s[current]) {
                result += (current - start) + '' + s[start];
                start = current;
            }
        }
        s = result += s.substr(start, current);
    }

    return result;
};
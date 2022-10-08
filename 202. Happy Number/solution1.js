/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var set = {}, sum;

    while (n !== 1) {
        sum = 0;
        while (n !== 0) {
            sum += Math.pow(n % 10, 2);
            n = (n / 10) | 0;
        }
        if (sum in set) { return false; }
        set[n = sum] = '';
    }

    return true;
};

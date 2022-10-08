/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

var power = function(x, n) {
    if (n === 0) { return 1; }
    
    var r = power(x, (n / 2)|0);
    return r * r * ((n % 2 === 0) ? 1 : x);
};

var myPow = function(x, n) {
    if (n < 0) {
        return 1 / power(x, -n);
    } else {
        return power(x, n);
    }
};

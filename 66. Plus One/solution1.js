/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var tmp, carry = 1;

    for (var i = digits.length - 1; i >=0; --i) {
        tmp = digits[i] + carry;
        digits[i] = tmp % 10;
        carry = (tmp / 10) | 0;
        if (!carry) { break; }
    }

    if (carry) { digits.unshift(carry); }

    return digits;
};
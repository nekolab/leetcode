/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    return str.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ');
};
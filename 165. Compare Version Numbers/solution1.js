/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    version1 = version1.split('.');
    version2 = version2.split('.');
    var max_len = Math.max(version1.length, version2.length);

    var sub1, sub2;
    for (var i = 0; i < max_len; ++i) {
        sub1 = parseInt(version1[i] || 0, 10);
        sub2 = parseInt(version2[i] || 0, 10);
        if (sub1 > sub2) { return 1; }
        if (sub1 < sub2) { return -1; }
    }
    return 0;
};

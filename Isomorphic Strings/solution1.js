/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var convertTableS = {},
        convertTableT = {};

    for (var i = 0; i < s.length; ++i) {
        if (!(s[i] in convertTableS))
            convertTableS[s[i]] = t[i];
        if (!(t[i] in convertTableT))
            convertTableT[t[i]] = s[i];
        if (convertTableS[s[i]] !== t[i] ||
            convertTableT[t[i]] !== s[i])
            return false;
    }

    return true;
};

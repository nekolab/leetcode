/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var start = null, cur, len = nums.length, result = [];

    for (var i = 0; i < len; ++i) {
        if (start === null) { start = nums[i]; }
        cur = nums[i];
        if (cur + 1 !== nums[i + 1]) {
            result.push((start === cur) ? cur + "" : start + "->" + cur);
            start = null;
        }
    }

    return result;
};
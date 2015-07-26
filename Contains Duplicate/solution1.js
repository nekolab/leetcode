/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var bools = {};
    for (var i = 0; i < nums.length; ++i) {
        if (bools[nums[i]]) { return true; }
        bools[nums[i]] = true;
    }
    return false;
};

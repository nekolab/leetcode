/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    var i, index, map = {};
    for (i = 0; i < nums.length; ++i) {
        map[target - nums[i]] = { index: i + 1 };
    }

    for (i = 0; i < nums.length; ++i) {
        if (nums[i] in map && ((index = map[nums[i]].index) != (i + 1))) {
            return (index > i + 1) ? [i + 1, index] : [index, i + 1];
        }
    }
};
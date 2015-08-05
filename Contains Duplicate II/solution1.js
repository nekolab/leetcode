/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var hashtable = {};

    for (var i = 0; i < nums.length; ++i) {
        if (nums[i] in hashtable) {
            if (i - hashtable[nums[i]] <= k) {
                return true;
            } else {
                hashtable[nums[i]] = i;
            }
        } else {
            hashtable[nums[i]] = i;
        }
    }

    return false;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0, right = nums.length
  
  while (left < right) {
      const mid = left + Math.floor((right - left) / 2)
      if (target === nums[mid]) {
          return mid
      } else if (target > nums[mid]) {
          left = mid + 1
      } else {
          right = mid
      }
  }
  
  return left
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let left = 0, right = nums.length - 1
  
  while (right - left > 1) {
      const mid = left + Math.floor((right - left) / 2)
      if (nums[left] < nums[right]) {
          return nums[left]
      } else if (nums[right] < nums[mid]) {
          left = mid
      } else {
          right = mid
      }
  }
  
  return Math.min(nums[left], nums[right])
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const deltaMap = new Map()
  const length = nums.length
  
  for (let i = 0; i < length; ++i) {
      const found = deltaMap.get(nums[i])
      if (found != null) {
          return [found, i]
      }
      const delta = target - nums[i]
      deltaMap.set(delta, i)
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const dp = new Array(nums.length)
  
  for (let i = 0; i < dp.length; ++i) {
      dp[i] = [0, 0]
  }
  
  dp[0][0] = 0
  dp[0][1] = nums[0]
  
  if (nums.length >= 2) {
      dp[1][0] = nums[0]
      dp[1][1] = Math.max(nums[0], nums[1])
  }
  
  for (let i = 2; i < dp.length; ++i) {
      dp[i][0] = Math.max(
          dp[i - 1][0],
          dp[i - 1][1],
      )
      dp[i][1] = Math.max(
          dp[i - 1][0] + nums[i], 
          dp[i - 1][1],
      )
  }
  
  return Math.max(dp[nums.length - 1][0], dp[nums.length - 1][1])
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob2 = function(nums) {
  const dp = new Array(nums.length)

  dp[0] = nums[0]
  dp[1] = /* nums.length === 1 ? nums[0] :*/ Math.max(nums[0], nums[1])
  
  for (let i = 2; i < nums.length; ++i) {
      dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }
  
  return dp[nums.length - 1]
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob3 = function(nums) {
  let prePre = nums[0], pre = Math.max(nums[0] | 0, nums[1] | 0)
  let current = pre
  
  for (let i = 2; i < nums.length; ++i) {
      current = Math.max(prePre + nums[i], pre)
      prePre = pre
      pre = current
  }
  
  return current
};

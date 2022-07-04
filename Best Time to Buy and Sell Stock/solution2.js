/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  const length = prices.length
  
  const dp = new Array(length + 1)
  dp[0] = [-Infinity, 0]
  
  for (let i = 1; i <= length; ++i) {
      dp[i] = [
          Math.max(-prices[i - 1], dp[i - 1][0]),
          Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i - 1]),
      ]
  }
  
  return dp[length][1]
};

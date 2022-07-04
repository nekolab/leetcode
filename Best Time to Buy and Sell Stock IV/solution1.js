/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(k, prices) {
    const length = prices.length
    if (length === 0 || k == 0) { return 0}
    
    let dp = new Array(2 * k)
    dp.fill(-Infinity)
    
    for (let i = 0; i < length; ++i) {
        for (let j = 0; j < k; ++j) {
            dp[2 * j] = Math.max(dp[2 * j], (j === 0 ? 0 : dp[2 * j - 1]) - prices[i])
            dp[2 * j + 1] = Math.max(dp[2 * j + 1], dp[2 * j] + prices[i])
        }
    }
    
    return dp[2 * k - 1]
};

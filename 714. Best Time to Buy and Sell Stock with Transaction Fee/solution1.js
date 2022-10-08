/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let sold = 0, hold = -Infinity
    
    for (let i = 0; i < prices.length; ++i) {
        hold = Math.max(hold, sold - prices[i])
        sold = Math.max(sold, hold + prices[i] - fee)
    }
    
    return sold
};
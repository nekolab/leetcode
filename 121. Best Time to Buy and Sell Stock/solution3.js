/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let sold = 0, hold = -Infinity
    
    for (let i = 0; i < prices.length; ++i) {
        hold = Math.max(hold, -prices[i])
        sold = Math.max(sold, hold + prices[i])
    }
    
    return sold
};

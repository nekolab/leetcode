/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let cooldownSold = 0, sold = 0, hold = -Infinity
    
    for (let i = 0; i < prices.length; ++i) {
        let soldTemp = sold
        sold = Math.max(sold, hold + prices[i])
        hold = Math.max(hold, cooldownSold - prices[i])
        cooldownSold = soldTemp
    }
    
    return sold
};

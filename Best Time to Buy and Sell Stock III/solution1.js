/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let holdOnce = -Infinity, soldOnce = -Infinity, holdTwice = -Infinity, soldTwice = -Infinity
    
    for (let i = 0; i < prices.length; ++i) {
        holdOnce = Math.max(holdOnce, -prices[i])
        soldOnce = Math.max(soldOnce, holdOnce + prices[i])
        holdTwice = Math.max(holdTwice, soldOnce - prices[i])
        soldTwice = Math.max(soldTwice, holdTwice + prices[i])
    }
    
    return soldTwice
};

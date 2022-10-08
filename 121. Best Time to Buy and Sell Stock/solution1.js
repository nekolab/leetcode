/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let min_price = Number.MAX_SAFE_INTEGER
  let max_profit = 0
  for (let price of prices) {
      if (price < min_price) {
          min_price = price
      } else if (price - min_price > max_profit) {
          max_profit = price - min_price
      }
  }
  return max_profit
};

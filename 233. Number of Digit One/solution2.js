/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
  let factor = 0
  let result = 0
  for (let i = 1; i <= n; i *= 10) {
      const digit = Math.floor(n / i) % 10
      const mod = Math.floor(n) % i
      const counter = factor * digit + (digit > 1 ? i : (digit === 1 ? mod + 1 : 0))
      result += counter
      factor += factor * 9 + i
  }
  return result
};

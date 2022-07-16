/**
 * @param {string} str
 * @return {string}
 */
var longestPalindrome = function(str) {
  const strLength = str.length
  
  let tmp
  let prev = new Array(strLength).fill(true)
  let current = new Array(strLength).fill(false)
  
  let longestSubStrLength = 1,
      longestSubStrStart = strLength - 1,
      longestSubStrEnd = strLength

  for (let i = strLength - 2; i >= 0; --i) {
      current[i] = true
      
      current[i + 1] = str[i] === str[i + 1]
      if (current[i + 1] && longestSubStrLength < 2) {
          longestSubStrLength = 2
          longestSubStrStart = i
          longestSubStrEnd = i + 2
      }
      
      for (let j = i + 2; j < strLength; ++j) {
          current[j] = prev[j - 1] && (str[i] === str[j])
          if (current[j] && (j - i + 1) > longestSubStrLength) {
              longestSubStrLength = j - i + 1
              longestSubStrStart = i
              longestSubStrEnd = j + 1
          }
      }
          
      tmp = prev
      prev = current
      current = tmp
  }
  
  return str.slice(longestSubStrStart, longestSubStrEnd)
};
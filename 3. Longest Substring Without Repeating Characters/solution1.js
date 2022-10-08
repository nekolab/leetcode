/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let lastSeenMap = new Map()
  
  let start = 0, end = 0, length = s.length
  let nextCheck = 0, lastSeenPos, maxLength = 0
  
  while (nextCheck < length) {
      if (lastSeenPos != null && lastSeenPos >= start) {
          ++start
      } else {
          end = nextCheck++
          maxLength = Math.max(maxLength, end - start + 1)
          lastSeenMap.set(s[end], end)
          lastSeenPos = lastSeenMap.get(s[nextCheck])
      }
  }
  
  return maxLength
};

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  const sorted = intervals.sort((lhs, rhs) => lhs[0] - rhs[0])
  
  const merged = [sorted[0]], length = sorted.length
  
  for (let i = 1; i < length; ++i) {
      if (sorted[i][0] <= merged[merged.length - 1][1]) {
          if (sorted[i][1] >= merged[merged.length - 1][1]) {
              merged[merged.length - 1][1] = sorted[i][1]
          }
      } else {
          merged.push(sorted[i])
      }
  }
  
  return merged
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let start = 0, end = nums.length
  const kIndex = k - 1
  
  while (true) {
      const pivot = sort(nums, start, end)
      if (pivot === kIndex) {
          return nums[kIndex]
      } else if (pivot > kIndex) {
          end = pivot
      } else if (pivot < kIndex) {
          start = pivot + 1
      }
  }
};

let sort = (nums, from, to) => {       // [from, to), return pivot index
  const pivot = nums[from]
  let checkedIndex = from + 1
  for (let i = checkedIndex; i < to; ++i) {
      if (nums[i] > pivot) {
          swap(nums, i, checkedIndex)
          ++checkedIndex
      }
  }
  swap(nums, from, checkedIndex - 1)
  return checkedIndex - 1
}

let swap = (nums, a, b) => {
  let temp = nums[a]
  nums[a] = nums[b]
  nums[b] = temp
}

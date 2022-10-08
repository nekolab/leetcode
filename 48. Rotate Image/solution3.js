/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
  const size = matrix.length
  
  for (let vertex = 0; vertex < size - 1; ++vertex) {
      for (let round = vertex + 1; round < size; ++round) {
          matrix[vertex][round] ^= matrix[round][vertex]
          matrix[round][vertex] ^= matrix[vertex][round]
          matrix[vertex][round] ^= matrix[round][vertex]
      }   
  }
  
  for (let i = 0; i < size; ++i) {
      // matrix[i].reverse()
      // or
      for (let j = Math.floor(size / 2) - 1; j >= 0; --j) {
          matrix[i][j] ^= matrix[i][size - 1 - j]
          matrix[i][size - 1 - j] ^= matrix[i][j]
          matrix[i][j] ^= matrix[i][size - 1 - j]
      }
  }
};

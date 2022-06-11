/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
  for (let tier = Math.floor(matrix.length / 2); tier > 0; --tier) {
      const tier_size = tier * 2 + matrix.length % 2
      const tier_offset = Math.floor(matrix.length / 2) - tier
      
      for (let round = 0; round < tier_size - 1; ++round) {
          const lower_border = tier_offset
          const upper_border = tier_offset + tier_size - 1
          
          const tmp = matrix[lower_border][lower_border + round]
          matrix[lower_border][lower_border + round] = matrix[upper_border - round][lower_border]
          matrix[upper_border - round][lower_border] = matrix[upper_border][upper_border - round]
          matrix[upper_border][upper_border - round] = matrix[lower_border + round][upper_border]
          matrix[lower_border + round][upper_border] = tmp
      }
  }
};

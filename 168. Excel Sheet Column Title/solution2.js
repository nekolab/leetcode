/**
 * @param {number} columnNumber
 * @return {string}
 */
 var convertToTitle = function(columnNumber) {
  const baseCodePoint = 'A'.charCodeAt(0)
  const result = []
  
  let number = columnNumber
  while (number !== 0) {
      result.unshift(String.fromCharCode((number - 1) % 26 + baseCodePoint))
      number = Math.floor((number - 1) / 26)
  }

  return result.join('')
};

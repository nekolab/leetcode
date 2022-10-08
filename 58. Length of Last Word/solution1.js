/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (s === "") return 0;
  var arr = s.split(' ');
  var elem;
  while((elem = arr.pop()) !== undefined) {
      if (elem.length > 0) {
          return elem.length;
      }
  }
  return 0;
    // return /(^| )([a-zA-Z]*)\s*$/g.exec(s)[2].length;
};
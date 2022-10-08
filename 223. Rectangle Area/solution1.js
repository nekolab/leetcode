/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var I = Math.max(A, E), J = Math.max(B, F),
        K = Math.min(C, G), L = Math.min(D, H),
        ratio = (Math.abs(A + C - E - G) <= (C - A + G - E) &&
                 Math.abs(B + D - F - H) <= (D - B + H - F)) ? 1 : 0;

    return Math.abs((C - A) * (D - B)) +
           Math.abs((G - E) * (H - F)) -
           Math.abs((K - I) * (L - J)) * ratio;
};
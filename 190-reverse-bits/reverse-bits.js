/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var result = 0;
    for (var i = 0; i < 32; i++) {
        result *= 2;
        result |= n & 1;
        n = n >> 1;
    }
    return result >>> 0;
};
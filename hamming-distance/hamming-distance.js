/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

var hammingDistance = function(x, y) {
    let count = 0;
    while (x || y) {
        x = x / 2;
        y = y / 2;
        if (x % 1 - y % 1 !== 0) {
            count += 1;
        };
        x = parseInt(x);
        y = parseInt(y);
    };
    return count;
};
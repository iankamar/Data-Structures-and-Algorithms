/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n < 3) {
        return 0;
    };
    let arr = new Array(n).fill(1);
    for (let i = 2; i * i < n; i++) {
        if (!arr[i]) {
            continue;
        };
        for (let j = i * i; j < n; j += i) {
            arr[j] = 0;
        };
    };
    return arr.reduce( (a,b) => b + a) - 2;
};
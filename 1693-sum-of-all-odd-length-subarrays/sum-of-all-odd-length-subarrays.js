/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let totalSum = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let contribution = Math.floor(((i + 1) * (n - i) + 1) / 2);
        totalSum += contribution * arr[i];
    }
    return totalSum;
};
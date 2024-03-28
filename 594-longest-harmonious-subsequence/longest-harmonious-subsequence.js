/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let count = {};
    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
    }
    let max = 0;
    for (let num in count) {
        if (count[parseInt(num) + 1]) {
            max = Math.max(max, count[num] + count[parseInt(num) + 1]);
        }
    }
    return max;
};
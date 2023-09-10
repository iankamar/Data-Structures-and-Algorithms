/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length + 1;
    let sum = n * (n-1)/2;
    nums.forEach(a => sum -= a);
    return sum;
};

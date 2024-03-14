/**
 * @param {number[]} nums
 * @return {number}
 */


var differenceOfSum = function(nums) {
    var elementSum = nums.reduce((a, b) => a + b, 0);
    var digitSum = nums.reduce((a, b) => a + b.toString().split('').reduce((i, j) => i + parseInt(j), 0), 0);
    return Math.abs(elementSum - digitSum);
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (countSetBits(i) === k) {
            sum += nums[i];
        }
    }
    return sum;
};


const countSetBits = n => {
    let count = 0;
    while (n) {
        n &= (n - 1);
        count++;
    }
    return count;
}
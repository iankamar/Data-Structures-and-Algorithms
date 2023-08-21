/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0;
    let right;
    for (right = 0; right < nums.length; right++) {
        k -= 1 - nums[right];
        if (k < 0) {
            k += 1 - nums[left];
            left++;
        }
    }
    return right - left;
};

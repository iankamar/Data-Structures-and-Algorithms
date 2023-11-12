/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

    nums.sort((a,b) => a - b).reverse();

    return nums[k-1];
    
};
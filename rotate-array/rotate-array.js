/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
    const len = nums.length
    k = (k % len)
    
    let end = nums.splice(len-k)
    
    nums.splice(0,0,...end)
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var getAverages = function(nums, k) {
    let res = new Array(nums.length).fill(-1);
    let acc = 0;
    
    for(let i = 0; i < res.length; i++) {
    acc += nums[i];
    if (i < 2 * k) continue;
    
    res [i - k] = ~~(acc / (2 * k + 1));
    acc -= nums[i -2 * k];
    }
    return res;
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
var runningSum = function(nums) {
  let sum = 0;
    for (let i = 0; i< nums.lengt; i++) {
        sum += nums[i];
        nums[i]=s;
    }
    return nums
};
*/

const runningSum = nums => {
    nums.reduce((a,c,i,arr) => arr[i] += a)
    return nums
}
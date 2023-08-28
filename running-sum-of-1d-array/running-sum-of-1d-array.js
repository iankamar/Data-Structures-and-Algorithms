/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function(nums) {
    nums.reduce((a,c,i,arr) => arr[i] += a)
    return nums
}

/*
const runningSum = nums => {
    nums.reduce((a,c,i,arr) => arr[i] += a)
    return nums
}
*/

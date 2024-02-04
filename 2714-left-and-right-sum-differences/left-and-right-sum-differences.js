/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
     let n = nums.length;
    let leftSum = new Array(n).fill(0);
    let rightSum = new Array(n).fill(0);
    let answer = new Array(n).fill(0);

    for (let i = 1; i < n; i++) {
        leftSum[i] = leftSum[i-1] + nums[i-1];
    }

    for (let i = n-2; i >= 0; i--) {
        rightSum[i] = rightSum[i+1] + nums[i+1];
    }

    for (let i = 0; i < n; i++) {
        answer[i] = Math.abs(leftSum[i] - rightSum[i]);
    }

    return answer; 
};
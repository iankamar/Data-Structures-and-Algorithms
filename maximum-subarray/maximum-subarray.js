/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
    let max1 = nums[0];
    let max2 = nums[0];
    for(let i=1; i<nums.length; i++){
        max1 = Math.max(nums[i] , max1 +nums[i])
        
        if(max1 > max2){
            max2 = max1;
        }
    }
    return max2;
};
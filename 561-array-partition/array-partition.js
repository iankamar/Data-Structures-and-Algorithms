/**
 * @param {number[]} nums
 * @return {number}
 */

var arrayPairSum = function(nums) {
    // Sort the array
    nums.sort((a, b) => a - b);
    
    // Initialize the sum
    let sum = 0;
    
    // Iterate over the array with a step of 2
    for (let i = 0; i < nums.length; i += 2) {
        // Add the current number to the sum
        sum += nums[i];
    }
    
    // Return the sum
    return sum;
};

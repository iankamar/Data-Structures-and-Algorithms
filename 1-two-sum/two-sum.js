/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums, target) {
    let numIndices = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        if (numIndices.has(complement)) {
            return [numIndices.get(complement), i];
        }
        
        numIndices.set(nums[i], i);
    }
    
    return [];
};

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */


var arithmeticTriplets = function(nums, diff) {
    let count = 0;
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] - nums[j] == diff) {
                let k = map.get(nums[j] - diff) || 0;
                count += k;
            }
        }
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    
    return count;
};

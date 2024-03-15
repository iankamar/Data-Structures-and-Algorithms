/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let count = 0;
    let map = new Map();
    
    for(let num of nums) {
        if(map.has(num - k)) {
            count += map.get(num - k);
        }
        if(map.has(num + k)) {
            count += map.get(num + k);
        }
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    return count;
};

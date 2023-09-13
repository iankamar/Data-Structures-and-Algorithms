/**
 * @param {number[]} nums
 * @return {number}
 */

var largestUniqueNumber = function(nums) {
    
    let res  = -1;
    
    let map = new Map();
    
    for(let i of nums){
        
        if(map.has(i)) map.set(i,map.get(i)+1);
        else map.set(i,1);
    }
    
    
    for(let i = nums.length -1; i >= 0; i--){
        
        if(map.get(nums[i]) == 1 && nums[i] > res) res = nums[i];
    }
    
    return res;
    
};
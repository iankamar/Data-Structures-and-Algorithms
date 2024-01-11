var findDisappearedNumbers = function(nums) {
    let result = []
    
    for(let i=0; i<nums.length; i++) {
        let index = Math.abs(nums[i]) -1
        if(nums[index] > 0) {
            nums[index] *= -1
        }
    }
    
    for(let i=1; i<=nums.length; i++) {
        if(nums[i-1] > 0) {
            result.push(i)
        }
    }
    return result
};
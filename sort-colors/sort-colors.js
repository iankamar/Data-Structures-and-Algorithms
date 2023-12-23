var sortColors = function(nums) {
    let twoI = nums.length - 1
    let zeroI = 0
    for (let i = 0; i <= twoI; i++) {
        if (nums[i] == 0) {
            [nums[i], nums[zeroI]] = [nums[zeroI], nums[i]]
            zeroI++
        } else if (nums[i] == 2) {
            [nums[i], nums[twoI]] = [nums[twoI], nums[i]]
            twoI--
            i--
        }
    }
};
var maximumGap = function(nums) {
    if (nums.length <= 1) return 0;
    nums.sort((a, b) => a - b);
    let prev = nums[0];
    let max = 0;
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(max, nums[i] - prev);
        prev = nums[i];
    }
    return max;
};
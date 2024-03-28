/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let all_nums = new Set([...Array(nums.length + 1).keys()].slice(1));
    let nums_set = new Set(nums);
    let missing_num = [...all_nums].filter(x => !nums_set.has(x))[0];
    let twice_num = nums.reduce((a, b) => a + b, 0) - [...nums_set].reduce((a, b) => a + b, 0);
    return [twice_num, missing_num];
};

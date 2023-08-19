/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {
    const arr = nums.map(value => Math.pow(value,2));
    return arr.sort((a,b)=> a-b);
};
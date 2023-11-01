/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const countComponents = (n, edges) => {
  const nums = Array(n).fill(-1);

  // Step 1. union find
  for (let i = 0; i < edges.length; i++) {
    const x = find(nums, edges[i][0]);
    const y = find(nums, edges[i][1]);

    // union
    if (x !== y) nums[x] = y;
  }

  // Step 2. count the -1
  return nums.filter(num => num === -1).length;
};

const find = (nums, i) => {
  if (nums[i] === -1) return i;
  return find(nums, nums[i]);
};
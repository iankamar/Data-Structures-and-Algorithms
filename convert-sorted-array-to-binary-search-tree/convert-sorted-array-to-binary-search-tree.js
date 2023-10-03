/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function(nums) {
  var helper = function(l,r) {
      if(l > r) {
          return null;
      }
      let mid = Math.round((r + l)/2);
      const tn = new TreeNode(nums[mid]);
      tn.left = helper(l, mid - 1);
      tn.right = helper(mid + 1, r);
      return tn;
  }
  return helper(0, nums.length - 1);
};
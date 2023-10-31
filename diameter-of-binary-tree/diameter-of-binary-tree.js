/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let result = 1;
    dfs(root)
    
    function dfs(root) {
        if(!root) {
            return 0;
        }
        let l = dfs(root.left);
        let r = dfs(root.right);
        result = Math.max(result, l + r + 1);
        return Math.max(l, r) + 1;
    }
    
    return result - 1;
};
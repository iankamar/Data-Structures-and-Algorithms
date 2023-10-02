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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root)
        return true;
    return dfs(root.left, root.right);
    
    function dfs(leftNode, rightNode) {
        if (!leftNode && !rightNode) {
            return true;
        }
        if (leftNode && !rightNode || !leftNode && rightNode || leftNode.val !== rightNode.val) {
            return false;
        }
        return dfs (leftNode.right, rightNode.left) && dfs(leftNode.left, rightNode.right);
    }
};

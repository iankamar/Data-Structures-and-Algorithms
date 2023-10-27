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
var minDepth = function(root) {
    let min = Infinity;
    let cur = 0;
    t(root, 1);
    return min === Infinity ? 0 : min;
    function t(node, cur) {
        if (node === null || min < cur) {
            return;
        };
        if (node.left === null && node.right === null) {
            min = cur < min ? cur : min;
        };
        t(node.left, cur + 1);
        t(node.right, cur + 1);
        return;
    };
};
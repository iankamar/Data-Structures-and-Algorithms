/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    return helper(1, n)
};

var helper = function(l, n) {
    if (l == n) {
        return [new TreeNode(l)]
    } else {
        let res = []
        for (let i = l; i < n + 1; i++) {
            let left = i != l ? helper(l, i - 1) : [null]
            let right = i != n ? helper(i + 1, n) : [null]
            for (let leftTree of left) {
                for (let rightTree of right) {
                    let node = new TreeNode(i)
                    node.left = leftTree
                    node.right = rightTree
                    res.push(node)
                }
            }
        }
        return res
    }
}
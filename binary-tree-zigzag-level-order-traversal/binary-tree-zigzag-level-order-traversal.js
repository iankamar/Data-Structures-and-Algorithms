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
 * @return {number[][]}
 */

var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let stackQueue = [root];
    let result = [];
    let level = 1;
    
    while (stackQueue.length > 0) {
        const isLtoR = level % 2 === 1;
        const subLength = stackQueue.length;
        const subList = [];
        for (let i = 0; i < subLength; i++) {
            let node;
            if (isLtoR) {
               node = stackQueue.shift();
                if (node.left) stackQueue.push(node.left);
                if (node.right) stackQueue.push(node.right);
            } else {
                node = stackQueue.pop();                
                if (node.right) stackQueue.unshift(node.right);
                if (node.left) stackQueue.unshift(node.left);
                
            }
            subList.push(node.val);
        }
        level++;
        result.push(subList);
    }
    return result;
};
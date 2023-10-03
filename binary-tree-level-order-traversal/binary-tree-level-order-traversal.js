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
var levelOrder = function(root) {
    if (!root) return [];
    const results = [];
    let queue = [root];
    
    while (queue.length){
        const level = [];
        const newQueue = [];
        for (const node of queue) {
            level.push(node.val);
            if(node.left) newQueue.push(node.left);
            if(node.right) newQueue.push(node.right);
        }
        results.push(level);
        queue = newQueue;
    }
    return results;
};




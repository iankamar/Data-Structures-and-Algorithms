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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if (!root) return [];
    let result = [];
    let queue = [root];
    while (queue.length > 0){
        let sum = 0;
        let count = 0;
        let temp = [];
        while (queue.length > 0){
            let node = queue.shift();
            sum += node.val;
            count++;
            if(node.left) temp.push(node.left);
        }
        queue = temp;
        result.push(sum / count);
    }
    return result;
};

var averageOfLevels = function(root) {
    if (!root) return [];
    let result = [];
    let queue = [root];
    while (queue.length > 0) {
        let sum = 0;
        let count = 0;
        let temp = [];
        while (queue.length > 0) {
            let node = queue.shift();
            sum += node.val;
            count++;
            if (node.left) temp.push(node.left);
            if (node.right) temp.push(node.right);
        }
        queue = temp;
        result.push(sum / count);
    }
    return result;
};

/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function(nums) {
    let previous = 0;
    let current = 0;
    let temp; 
    for (let x of nums) {
        temp = current; 
        current = Math.max(x+previous, current);
        previous = temp;
    }
    return current;
}
/**
 * @param {number[]} weight
 * @return {number}
 */
var maxNumberOfApples = function(arr) {
    const sortedArr = [...arr].sort((a, b) => a - b);
    let counter = 0;
    let totalWeight = 0;
    
    for (let i = 0; i < sortedArr.length; i++) {
        totalWeight += sortedArr[i];
        if (totalWeight <= 5000) {
            counter += 1;
        } else {
            break;
        }
    }
    return counter;
};
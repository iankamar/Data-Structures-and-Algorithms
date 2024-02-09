/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let ruleIndex;
    if (ruleKey === "type") {
        ruleIndex = 0;
    } else if (ruleKey === "color") {
        ruleIndex = 1;
    } else {
        ruleIndex = 2;
    }

    let count = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i][ruleIndex] === ruleValue) {
            count++
        }
    }
    return count;
};
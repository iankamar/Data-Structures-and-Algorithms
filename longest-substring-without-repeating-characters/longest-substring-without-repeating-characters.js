/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let set = new Set();
    let i = 0;
    let j = 0;
    while (i < s.length && j < s.length) {
        if (!set.has(s[j])) {
            set.add(s[j]);
            maxLength = Math.max(maxLength, j - i + 1);
            j++;
        } else {
            set.delete(s[i]);
            i++;
        }
    }
    return maxLength;
};


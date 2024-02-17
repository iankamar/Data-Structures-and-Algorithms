/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    const isPalindrome = (str) => {
        let start = 0;
        let end = str.length - 1;
        while (start < end) {
            if (str[start] !== str[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true
    }

    // Iterate over the words
    for (let word of words) {
        if (isPalindrome(word)) {
            return word;
        }
    }
    return "";
};
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length === 0) {
        return true;
    }
    var index = 0;
    for (var i = 0; i < t.length; i++) {
        if (t[i] === s[index]) {
            index++;
        }
        if (index === s.length) {
            return true;
        }
    }
    return false;
};

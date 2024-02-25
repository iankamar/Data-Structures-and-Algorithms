/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const counter = new Map();
    for (let i = 0; i < s.length; i++) {
        counter.set(s[i], (counter.get(s[i]) || 0) + 1);
        counter.set(t[i], (counter.get(t[i]) || 0) - 1);
    }
    for (const count of counter.values()) {
        if (count !== 0) {
            return false;
        }
    }
    return true;
};

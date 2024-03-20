/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    var acronym = words.map(word => word[0]).join('');
    return acronym === s;
};
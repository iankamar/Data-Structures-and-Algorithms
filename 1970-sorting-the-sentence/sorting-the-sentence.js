/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let words = s.split(' ');
    let sortedWords = new Array(words.length);

    for (let word of words) {
        let index = parseInt(word.slice(-1)) -1;
        let originalWord = word.slice(0, -1);
        sortedWords[index] = originalWord;
    }

    return sortedWords.join(' ');
};
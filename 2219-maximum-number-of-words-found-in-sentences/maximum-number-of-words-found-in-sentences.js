/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxWords = 0;
    for(let i= 0; i < sentences.length; i++) {
        let words = sentences[i].split(' ').length;
        if(words > maxWords) {
            maxWords = words;
        }
    }
    return maxWords;
};
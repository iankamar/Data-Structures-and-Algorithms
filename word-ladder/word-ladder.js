/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let res = 1;
    let queue = [beginWord];
    let set = new Set(wordList);
    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i ++) {
            let currentWord = queue.shift();
            if (currentWord == endWord) return res;
            for (let i = 0; i < currentWord.length; i ++) {
                for (let j = 0; j < 26; j ++) {
                    let nextWord = currentWord.slice(0, i) + String.fromCharCode(j + 97) + currentWord.slice(i + 1)
                    if (set.has(nextWord)) {
                        queue.push(nextWord);
                        set.delete(nextWord)
                    }
                }
            }
        }
        res +=1;
    }
    return 0;
};
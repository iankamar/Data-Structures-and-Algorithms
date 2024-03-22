/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const transformations = new Set();

    for (let word of words) {
        let transformation = '';
        for (let char of word){
            transformation += morseCode[char.charCodeAt(0) - 'a'.charCodeAt(0)];
        }
        transformations.add(transformation);
    }

    return transformations.size;
};

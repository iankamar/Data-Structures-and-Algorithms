/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let arr = [];
    for(let i=0; i<sentence.length && arr.length<26; i++) {
        if (!arr.includes(sentence[i])) {
            arr.push(sentence[i]);
        }
    }
    
    if(arr.length == 26) return true;
    
    return false;
};
/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let arr = [first];
    for (let i = 0;i < encoded.length; i++) {
        arr.push(arr[i] ^ encoded[i]);
    }
    return arr;
};
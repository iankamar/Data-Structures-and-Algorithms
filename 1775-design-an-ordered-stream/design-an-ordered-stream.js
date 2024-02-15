/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.stream = new Array(n).fill(null);
    this.ptr = 0;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.stream[idKey - 1] = value;
    let chunk = [];

    while (this.stream[this.ptr]) {
        chunk.push(this.stream[this.ptr]);
        this.ptr++;
    }

    return chunk;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
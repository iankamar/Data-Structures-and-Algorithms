/**
 * @param {number} size
 */

/** 
 * @param {number} val
 * @return {number}
 */

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.nums = [];
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.nums.length == this.size) {
        this.nums.shift();
    }    
    this.nums.push(val);
    return this.nums.reduce((a,b) => a + b, 0) / this.nums.length;
};
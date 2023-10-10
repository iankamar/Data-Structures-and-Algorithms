/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.original = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.original;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let shuffle = this.original.slice(0);
    
    for (let i = 0; i < this.original.length; ++i) {
        const newPos = Math.floor(Math.random() * (i + 1));
        let tmp = shuffle[i];
        shuffle[i] = shuffle[newPos]; 
        shuffle[newPos] = tmp;
    }
    
    return shuffle;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
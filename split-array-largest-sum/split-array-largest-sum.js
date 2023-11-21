var splitArray = function(nums, m) {
    let len = nums.length;
    let max = 0;
    let sum = 0;
    for (let num of nums) {
        max = Math.max(max, num);
        sum += num;
    }
    let low = max;
    let high = sum;
    while (low < high) {
        let mid = Math.floor((high+low)/2);
        let pieces = split(nums, mid);
        if (pieces > m) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
    function split(nums, mid) {
        let pieces = 1;
        let tempSum = 0;
        for (let num of nums) {
            if (tempSum + num > mid) {
                tempSum = num;
                pieces++;
            } else {
                tempSum += num;
            }
        }
        return pieces;
    }
    
};
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */

let a, border;
const smallestDivisor = (nums, threshold) => {
    a = nums, border = threshold;
    return BinarySearch(0, Number.MAX_SAFE_INTEGER)
};

const BinarySearch = (low, high) => {
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);
        if (possible(mid)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
};

const possible = (d) => {
    let sum = 0;
    for (const x of a) sum += Math.ceil(x / d);
    return sum > border;
};
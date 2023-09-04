/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const ret = [];
    const map = new Map();
    for (const n of nums2) {
        const count = map.get(n) || 0;
        map.set(n, count + 1);
    }
    return nums1.filter(n => {
        let count = map.get(n);
        if (count) {
            map.set(n, --count);
            return true;
        }
        return false;
    });
};
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
    let curIndex = m + n;
    let num1 = nums1[--m];
    let num2 = nums2[--n];
    
    while (curIndex) {
        if (n < 0) {
            break;
        };
        if (num1 > num2) {
            nums1[--curIndex] = num1;
            num1 = nums1[--m];
        } else {
            nums1[--curIndex] = num2;
            num2 = nums2[--n];
        };
    };
    
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var nextGreaterElement = function(nums1, nums2) {
  const res = []
  for(let n of nums1){
    const idx = nums2.indexOf(n)
    let c = idx+1, found = -1
    while(nums2[idx] > nums2[c])c++
    if(c<nums2.length) found = nums2[c]
    res.push(found)
  }
  return res
};
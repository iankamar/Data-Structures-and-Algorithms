/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    let hash ={I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
    let ans = 0, cur = 0, prev = 0, j = s.length - 1
    for( ; j >= 0; j-=1){
        cur = hash[s[j]]
        cur < prev ? ans -= cur : ans += cur
        prev = cur
    }
    return ans;    
};
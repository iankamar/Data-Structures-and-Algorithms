/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in obj) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }
    let x = Object.keys(obj).sort(function (a, b) { return obj[b] - obj[a] })
    let len = arr.length;
    let ans = 0;

    for (let i = 0; i < x.length; i++) {
        
        if (len - obj[x[i]] > parseInt(arr.length / 2)) {
            len -= obj[x[i]]
           
            ans++;
        } else {
            break
        }
    }
    return ans + 1;

};
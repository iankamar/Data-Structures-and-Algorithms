/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let i=0;
    let len=arr.length;
    while(i<arr.length){
        if(arr[i]==0){
            arr.splice(i,0,0);
            i++;
        }            
        i++;
    }
    while(arr.length>len)
        arr.pop();
};
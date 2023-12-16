/**
 * @param {number[]} arr
 * @return {number[]}
 */
let replaceElements = function(arr) {
    for(let i=0;i<arr.length;i++){
        let max=0;
        let j=i+1;
        while(j<arr.length){
            max=Math.max(max,arr[j]);
            j++;
        }
        arr[i]=max;
    }
    arr[arr.length-1]=-1;
    return arr;
};
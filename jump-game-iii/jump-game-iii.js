/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const jumped = new Array(arr.length).fill(false);
    
    let helper = (index) => {
        if(arr[index] == 0){
            return true;
        }
        
        if(index < 0 || index > arr.length || jumped[index]){
            return false;
        }
        
        jumped[index] = true;
        
        return helper(index - arr[index]) || helper(index + arr[index]);
    }
    
    return helper(start);
};
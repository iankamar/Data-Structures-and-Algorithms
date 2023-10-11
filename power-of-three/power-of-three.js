/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfThree = function(n) {
    if(n===0){
        return false;
    } 
    while(n!==1){
        val=n/3;
        console.log(val,'val');
        if(val%3!==0 && val!==1){
            return false;
        }
        n=val;
        console.log(n,'n');
    }
    return true;
};
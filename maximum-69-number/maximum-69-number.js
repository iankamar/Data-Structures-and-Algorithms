/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number  = function(num) {
    const digits = num.toString().split('');
    const res = digits.map(Number)
    
    const index = res.findIndex(curr => curr === 6)
    
    return res.reduce((tot,curr,ind) => {
        if(ind === index) return tot * 10 + 9;
        return tot * 10 + curr
    },0)
};
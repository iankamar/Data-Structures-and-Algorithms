/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
    let stringInt = parseInt(x.toString().split('').reverse().join(''));
    if (x<0) {
        stringInt *= -1;
    }
    return (stringInt > -1*Math.pow(2,31) && stringInt < Math.pow(2,31) -1) ? stringInt :0;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let res = 0;
    for (let n of nums) {
        let divs = divisors(n);
        if(divs.length === 4) {
            res += divs.reduce((a, b) => a + b, 0);
        }
    }
    return res;
};

function divisors(n){
    let divs = [];
    for (let i = 1; i * i <= n; i++){
        if (n % i === 0){
            divs.push(i);
            if(i * i !== n) {
                divs.push(n /i);
            }
        }
    }
    return divs;
}
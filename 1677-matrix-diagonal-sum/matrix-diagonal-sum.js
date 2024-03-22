/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let n = mat.length;
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum += mat[i][i];
        sum += mat[i][n - i -1];
    }

    if (n % 2 === 1){
        sum -= mat[Math.floor(n/2)][Math.floor(n / 2)];
    }
    return sum;
};
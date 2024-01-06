/**
 * English poor, use google translate.
 * Information: The first number of the n-th row of Pascal's triangle is 1, the second number is 1 × (n-1), the third number is 1 × (n-1) × (n-2) / 2, paragraph number four 1 × (n-1) × (n-2) / 2 × (n-3) / 3 ... and so on.
 * Define an array, the array element is defined as an array of resort
 */
var getRow = function(rowIndex) {
    var result = [];
    for(var i=0; i<=rowIndex; i++){
        result[i] = [];
    }
    for(i=0; i<=rowIndex; i++){
        result[i][0] = result[i][i] = 1;
    }
    for(i=2; i<=rowIndex; i++){
        for(var j=1; j<i; j++){
            result[i][j] = result[i-1][j-1] + result[i-1][j];
        }
    }
    return result[rowIndex];
};
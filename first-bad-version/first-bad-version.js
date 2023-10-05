/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

var solution = function(isBadVersion) {
    let highestGood = 0;
    let lowestBad;
    return function(n) {
        lowestBad = n;
        while (lowestBad !== highestGood + 1) {
            let current = Math.floor((highestGood + lowestBad) / 2);
            isBadVersion(current) ? lowestBad = current : highestGood = current;
        }
        return lowestBad;
    };
};
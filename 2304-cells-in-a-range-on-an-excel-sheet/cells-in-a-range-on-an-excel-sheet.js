/**
 * @param {string} s
 * @return {string[]}
 */

var cellsInRange = function(s) {
    let [start, end] = s.split(':');
    let startCol = start.charCodeAt(0);
    let endCol = end.charCodeAt(0);
    let startRow = parseInt(start.slice(1));
    let endRow = parseInt(end.slice(1));

    let result = [];
    for (let col = startCol; col <= endCol; col++) {
        for (let row = startRow; row <= endRow; row++) {
            result.push(String.fromCharCode(col) + row);
        }
    }
    return result;
};

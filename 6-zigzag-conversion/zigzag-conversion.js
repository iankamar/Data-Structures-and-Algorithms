/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
    if (numRows === 1 || numRows >= s.length) return  s;

    const result = Array.from({length: numRows}, () => '');
    let index = 0, step = 1;

    for (const char of s) {
        result[index] += char;
        if (index === 0) step =1;
        else if (index === numRows-1 ) step = -1;
        index += step;
    }

    return result.join('');
}
/**
 * @param {number[]} arr
 * @return {number}
 */

const countElements = (arr) => arr.reduce((a, c) => (arr.includes(c + 1) ? ++a : a), 0); 
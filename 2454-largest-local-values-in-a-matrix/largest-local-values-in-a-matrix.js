/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    const n = grid.length;
    const maxLocal = Array.from({ length: n - 2 }, () => Array(n - 2).fill(0));

    for (let i = 1; i < n - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            let max = 0;
            // Check all elements in the 3x3 sub-matrix
            for (let x = i - 1; x <= i + 1; x++) {
                for (let y = j - 1; y <= j + 1; y++) {
                    max = Math.max(max, grid[x][y]);
                }
            }
            maxLocal[i - 1][j - 1] = max;
        }
    }
    return maxLocal;
};

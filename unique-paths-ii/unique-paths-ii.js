/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const r = obstacleGrid.length
    const c = obstacleGrid[0].length 
    
    const dp = Array(r).fill().map(() => Array(c).fill(0))
    
    for (let i = 0; i < r; i++) {
        if (obstacleGrid[i][0] === 1) break
        dp[i][0] = 1
    }
    
    for (let i = 0; i < c; i++) {
        if (obstacleGrid[0][i] === 1) break
        dp[0][i] = 1
    }
    
    for (let i = 1; i < r; i++) {
        for (let j = 1; j < c; j++) {
            if (obstacleGrid[i][j] === 1) continue
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
   
    return dp[r - 1][c - 1]
};
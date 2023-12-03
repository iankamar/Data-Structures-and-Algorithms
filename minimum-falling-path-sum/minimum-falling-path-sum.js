var minFallingPathSum = function(A) {
    const MAX = Number.MAX_SAFE_INTEGER;
    const n = A.length;
    const dp = new Array(n + 1);

    for (let i = 0; i <= n; i++) {
        dp[i] = new Array(n + 1).fill(0);
        dp[i][0] = MAX;
    }
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            let min = MAX;
            for (let k = j - 1; k < j + 2 && k <= n; k++) {
                min = Math.min(dp[i - 1][k], min);
            }
            dp[i][j] = min + A[i - 1][j - 1];
         }
    }
    
    return Math.min(...dp[n]);
};
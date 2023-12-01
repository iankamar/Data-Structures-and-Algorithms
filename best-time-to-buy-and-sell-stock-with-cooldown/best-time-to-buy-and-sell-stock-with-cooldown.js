/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 1) {
        return 0;
    }
    
    const dp = Array.from(Array(prices.length), () => Array(2));
    
    dp[0][0] = - prices[0];
    dp[0][1] = 0;
    dp[1][0] = - Math.min(prices[0], prices[1]);
    dp[1][1] = Math.max(0, prices[1] + dp[0][0]);
        
    if (prices.length === 2) {
        return Math.max(dp[1][0], dp[1][1]);
    }
    
    for (let i = 2; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-2][1] - prices[i]);
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] + prices[i]);
    }
    
    let solution = 0;
    for (let i = 0; i <dp.length; i++) {
        let temp = Math.max(dp[i][0], dp[i][1]);
        solution = Math.max(solution, temp);
    }
    
    return solution;    
};
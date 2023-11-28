var coinChange = function (coins, amount) {
  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let j = 0; j <= amount; j++) {
    for (let c of coins) {
      if (j >= c) {
        dp[j] = Math.min(dp[j - c] + 1, dp[j]);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
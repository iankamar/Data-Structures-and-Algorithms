/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let total = 0;
    for (let day = 0; day < prices.length -1; day++) {
        if (prices[day] < prices [day + 1]) {
            total += prices[day + 1 ] - prices[day];
        }
    }
    return total;
};
var maxProfit = function(prices, fee) {
    if(prices.length < 2) return 0;
    let profit = 0, min = prices[0];
    for(let g=1; g<prices.length; g++){
        if( prices[g] < min ) min = prices[g];
        else if( prices[g] > min +  fee ) {
           profit = profit +  prices[g] - fee - min;
           min = prices[g] - fee;
        }
    }
    return profit;    
};
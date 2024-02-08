/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // At the beginning the minimum price is the first price
    let buyPrice = prices[0];
    // At the beginning the minimum profit is zero
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        // check if the current price is less update the buy_price
        if (prices[i] < buyPrice) {
            buyPrice = prices[i]
        } else {
            // else check if we can get a better profit
            let currentProfit = prices[i] - buyPrice;
            profit = Math.max(currentProfit, profit);
        }
    }

    return profit;
};
export function maxProfitWithLotsOfRuntimeComplexity(prices: number[]): number {

  let maxProfit = 0;
  
  if (prices.length == 2) {
      maxProfit = prices[1] - prices[0];
      return maxProfit > 0 ? maxProfit : 0;
  }

  for (let i = 0; i < prices.length; i ++) {
      const currentMin = prices[i];
      for (let j = i + 1; j < prices.length; j ++) {
          const currentMax = prices[j];
          const currentProfit = currentMax - currentMin;

          if (currentProfit > 0 && currentProfit > maxProfit) {
              maxProfit = currentProfit
          }
      };     
  };

  return maxProfit;
};

export function maxProfitWithJustOnePointer(prices: number[]): number {

  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 0; i < prices.length; i ++) {
      if (prices[i] < minPrice) {
          minPrice = prices[i]
      } else {
          // if its not a new min, we calculate the profit, 
          const profit = prices[i] - minPrice;
          if (profit > maxProfit) {
              maxProfit = profit;
          }
      }
  };

  return maxProfit;
};
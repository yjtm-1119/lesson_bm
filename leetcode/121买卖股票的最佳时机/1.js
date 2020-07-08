// var maxProfit = function (prices) {
//   // let price = prices[0]
//   let arr = []
//   let max = []
//   for (j = 0; j < prices.length - 1; j++) {
//     for (i = 0; i < prices.length - 1-j; i++) {
//       let proFit = prices[i+j + 1] - prices[j]
//       arr.push(proFit);
//     }
//     max.push(Math.max(...arr));
//     arr = [];
//   }
//   if (Math.max(...max) < 1) return 0
//   else return Math.max(...max)
// };
// var maxProfit = function(prices) {
//   let minprice = Number.MAX_SAFE_INTEGER
//   let max = 0
//   for(let i = 0;i<prices.length;i++){
//       if(prices[i]<minprice){
//           minprice = prices[i]
//       }else{
//           max = Math.max(max,prices[i]-minprice)
//       }
//   }
//   return max
// }

//动态规划法

var maxProfit = function(prices) {
  let last = 0
  let max = 0
  for (let i = 0; i < prices.length-1; i++) {
      last = Math.max(0, last + prices[i+1]-prices[i])
      max = Math.max(max,last)
  }
  return max
}
console.log(maxProfit([7,6,4,3,1]))
// console.log(maxProfit([7,6,4,3,1]))
// function solution(number) {
//   if (number === 1 || number === 2) {
//     return 0;
//   }
//   const threeTimes = Math.floor(number / 3);
//   const fiveTimes = Math.floor(number / 5);
//   const FifteenTimes = Math.floor(number / 15);
//   let preRes = (threeTimes * (3 + 3 * threeTimes)) / 2 +
//     (fiveTimes * (5 + 5 * fiveTimes)) / 2 - (FifteenTimes * (15 + 15 * FifteenTimes)) / 2
//   return (number % 3==0 || number % 5==0) ? preRes - number : preRes;
// }
function solution(number){
  var n3 = Math.floor(--number/3), n5 = Math.floor(number/5), n15 = Math.floor(number/15);
  return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15+1)) /2;
}
console.log(solution(4));
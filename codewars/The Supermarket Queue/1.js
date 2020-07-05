/**
超市排队结算，第一个参数为序列数组，元素表示时长，第二个参数为收银台的个数，不允许插队。计算出所有人结算的时间。
 
思路：要计算最后的时间，就要比较得出耗时最长的收银台。可以定义数组存放每个收银台的耗时，初始都为0，长度为n。然后将customers数组的第一个元素依次放入arr，优先放到值最小的位置。
// */
// function queueTime(customers, n) {
//   //TODO
//   if (customers.length <= 0) return 0
//   let arr = new Array(n);
//   arr.fill(0);
//   do {
//     arr[arr.indexOf(Math.min.apply(null, arr))] += customers.shift()
//   } while (customers.length > 0)
//   return Math.max.apply(null, arr)
// }
// 优化以后，对customers遍历，并将值保存到合适的位置；使用扩展运算符计算最大最小值
// function queueTime(customers, n) {
//   let arr = new Array(n).fill(0);
//   for (let i of customers) {
//     arr[arr.indexOf(Math.min(...arr))] += i;
//   }
//   return Math.max(...arr);
// }
function queueTime(customers, n) {
  // if (customers.length <= 0) return 0
  let arr = new Array(n).fill(0);
  while (customers.length > 0) {
    arr[arr.indexOf(Math.min.apply(null, arr))] += customers.shift()
  }
  return Math.max.apply(null, arr)
}
console.log(queueTime([2,3,10], 2))
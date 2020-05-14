let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// []
// [ 4, 9, 3, 2, 1, 5, 6, 7, 8, 0]
// [ 6, 4, 0, 8, 1, 2, 9, 5, 3, 7]

// 没有真正 随机  伪随机
// 正确：每个数在每一位出现的概率是均等的 => 把重复乱序足够多的次数，
// 那么把每一位计算出一个平均值  ~ 4.5
// function shuffle(arr) {
//   return arr.sort(() => Math.random() - 0.5)
// }
function shuffle(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i ++) {
    // - i 从后面
    // 
    let idx = Math.floor(Math.random() * (len - i));
    [arr[len - 1 - i], arr[idx]] = [arr[idx], arr[len - 1 - i]]
  }
  return arr;
}
let t = 1000;
for (let i = 0; i < t; i++) {
  // 浅拷贝一下
  let sorted = shuffle(arr.slice(0));
  for (let i = 0; i < sorted.length; i ++) {
    res[i] = sorted[i] + res[i];
  }
}
console.log(res.map(sum => sum / t));

// 正在比较 两个数
// 小于 0 ，那么 a 会被排列到 b 之前
// 大于 0 ， b 会被排列到 a 之前
// a - b > 0 
// a - b < 0
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// 升序
// 0 - 1 = -1 < 0
// 0 1
// 1 - 0 = 1 > 0
// 1 0  降序
// console.log(arr.sort((a, b) => b - a))

function bubbleSort(arr) {
  let len = arr.length;
  // 冒泡次数
  // 原始：[0, 1, 2, 3];
  // [1, 0, 2, 3] -> [1, 2, 0, 3] -> [1, 2, 3, 0]
  for (let i = 0; i < len - 1; i ++) {
    for (let j = 0; j < len - 1 - i; j ++) {
      let k = j + 1
      // a , b
      // sort 的回调函数 控制条件成不成立
      // [0, 1) 
      // () => Math.random() - 0.5
      // 两个数交换概率 50%
      // 两个数 可以交换也可以不交换
      // 
      if (arr[j] < arr[k]) {
        [arr[j], arr[k]] = [arr[k], arr[j]];
      }
    }
  }
  // console.log(arr);
}
bubbleSort(arr);
// 两个数 比较的时候
// 100% 交换 洗牌算法
// 后
// 从 后往前 取一个数 a
// 从 未洗牌的区间之内随机取出一个数 b
// a b 交换
// a 完成了
// 从 后往前 重复
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
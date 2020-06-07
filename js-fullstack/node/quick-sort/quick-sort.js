function partition(nums, left, right) {
  if (left >= right) return;
  let i = left;
  let j = right;
  let provit = nums[left];
  while(left < right) {
    // left right 互相替换
    // right 替换 left 位置
    // left 替换 right 位置
    // 1: 右边扫描，比基准值小数，如果这个数比基准值大，一直往前走
    while(left < right && nums[right] >= provit) right --;
    nums[left] = nums[right];
    // 2: 左边扫描 比基准值大数
    while(left < right && nums[left] <= provit) left ++;
    nums[right] = nums[left];
  }
  nums[left] = provit;

  // return left;
  partition(nums, i, left - 1);
  partition(nums, left + 1, j);
}
var quickSort = function(nums) {
  partition(nums, 0, nums.length - 1)
  return nums;
};
const arr = [8, 9, 7, -1, 5,4,3,0,10];
quickSort(arr);
console.log(arr);
//let provit =8;
//left 0   right:4;
//[5,9,7,-1,5]
//[5,9,7,-1,9]
//[5,-1,7,-1,9]
//[5,-1,7,8,9]
// 
// partition(arr, 0, arr.length - 1);
// console.log(arr);



const threeSum = function (nums) {
  let res = []
  let sum = 0
  nums = nums.sort((a, b) => {
    return a-b
  })
  const len = nums.length
  for (let i = 0; i < len - 2; i++){
    let j = i + 1;
    let k = len - 1;
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue//遇到重复的数字就跳过
    }
    while (j < k) {
      //三数之和小于0  左指针前进
      if (nums[i] + nums[j] + nums[k] < 0) {
        j++
        while (j < k && nums[j] === nums[j - 1]) {
          j++
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        //三数之和大于0   右指针左移
        k--
        while (j < k && nums[k] === nums[k + 1]) {
          k--
        }
      } else {
        res.push(nums[i], nums[j], nums[k])
        j++
        k--
        while (j < k && nums[j] === nums[j - 1]) {
          j++
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--
        }
      }
    }
  }
  function group(array, cut) {
    let index = 0;
    let newArray = [];
    while(index < array.length) {
    newArray.push(array.slice(index, index += cut));
    }
    return newArray;
  }
  return group(res,3)
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
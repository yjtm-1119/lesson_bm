// const twoSum = function (nums, target) {
//   const diffs = {}
//   const len = nums.length
//   for (let i = 0; i < len; i++){
//     if (diffs[target - nums[i]] !== undefined) {
//       return [diffs[target-nums[i]],i]
//     }
//     diffs[nums[i]]=i
//   }
// }
// let twoSum = (nums, target) => {
//   let targetMap = new Map()
//   for (let i = 0; i < nums.length; i++) {
//     const key = target - nums[i]
//     if (targetMap.has(key)) {
//       return [targetMap.get(key), i]
//     }
//     targetMap.set(nums[i], i)
//   }
// }

var twoSum = function (nums,target) {
  let targetMap = new Map()
  for (let i = 0; i < nums.length; i++){
    const key = target - nums[i];
    if (targetMap.has(key)) {
      return [targetMap.get(key), i];
    }
    targetMap.set(nums[i],i)
  }
}
console.log(twoSum([5, 2, 11, 15, 7, 6], 9))
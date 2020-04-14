// var removeDuplicates = function (nums) {
//     var pre = nums[0];
//     for (var i = 1; i < nums.length;) {
//         if (nums[i] === pre)
//             nums.splice(i, 1);
//         else
//             pre = nums[i++];
//     }
//     return nums.length
// };
// console.log(removeDuplicates([1, 2, 2, 2, 2, 2, 3]));



var f = function(nums) {
    var count = 0;//计数器用于累加相邻数组元素相等的情况
    let n = nums.length;//保存原始数组长度
    for(let i = 1;i<n;i++){
        if(nums[i] != nums[i-1]){
            nums[i-count] = nums[i]//i-count定位到修改后的数组元素对应位置
        }else{
            count++;
        }
    }
    console.log(nums);
    return n-count;
};
console.log(f([1, 2, 2, 2, 3,4,4,5,6]));


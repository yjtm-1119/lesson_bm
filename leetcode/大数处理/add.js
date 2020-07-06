// function addTwoNum(str1, str2){
//   // 将字符串转换成数组
//   var arr1 = str1.split('').reverse();
//   var arr2 = str2.split('').reverse();
//   var carry = 0, arr = [];
//   // 求字符串最大值和最小值
//   var max = Math.max(arr1.length, arr2.length);
//   var min = Math.min(arr1.length, arr2.length);
//   // 根据最大值进行循环遍历
//   for(var i = 0; i < max; i++){
//     // 两个数相加求和，如果和>=10都进位
//     // 如果遍历项为undefined都转化为0
//     var tmp = (+arr1[i] || 0) + (+arr2[i] || 0) + carry;
//     if( tmp >= 10){
//       carry = 1;
//       arr.push(tmp - 10);
//     } else {
//       carry = 0;
//       arr.push(tmp);
//     }
//   }
//   // 运算完成后，如果进位值>0则添加一位进位值
//   if (carry > 0) arr.push(carry);
//   // 将数组反转并输入结果字符串
//   return arr.reverse().join('');
// }



var str1 = '12345672222223132122';
var str2 = '9995832109876543210';

function addTwoNum(str1, str2) {
  var arr1 = str1.split('').reverse() //从个位数开始对齐相加 这里要反转数组
  var arr2 = str2.split('').reverse()
  var carry = 0, arr = []//设置进位值carry
  var max = Math.max(arr1.length, arr2.length);
  for (i = 0; i < max; i++) {
    var x = arr1[i] ? arr1[i] : 0;
    var y = arr2[i] ? arr2[i] : 0;
    var sum = parseInt(x) + parseInt(y) + carry;//跟链表中不同 这里的x y 取来要转number
    console.log(x, y)
    console.log(sum)
    carry = Math.floor((parseInt(x) + parseInt(y)+ carry) / 10);
    carry === 1 ? arr.push(sum - 10) : arr.push(sum);
  }
  if (carry>0) arr.push(carry);
  console.log(arr)
  return arr.reverse().join('')
}

console.log(addTwoNum(str1, str2));

//方法二
// function addTwoNum(str1, str2){
// 	var carry = 0, 
//       l1 = str1.length, 
//       l2 = str2.length, 
//       arr = [];
//       // 判断出str1和str2中最大长度的值
//     var max = Math.max(l1, l2);
//     // 根据加法规则，按从右向左运算规则
//     for (var i = l1 - 1, j = l2 -1, n = max -1 ; n >= 0; n--, i--, j--) {
//         // 两个数相加求和，如果和>=10都进位
//         // 如果遍历项为undefined都转化为0
//     	var sum = (+str1[i] || 0) + (+str2[j] || 0) + carry;
//         if (sum >= 10) {
//         	carry = 1;
//             arr.push(sum - 10);
//         } else {
//         	carry = 0;
//             arr.push(sum);
//         }
//     }
//     // 运算完成后，如果进位值>0则添加一位进位值
//     if (carry > 0) arr.push(carry);
//     // 将数组反转并输入结果字符串
//     return arr.reverse().join('');
// }


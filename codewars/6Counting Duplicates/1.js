function duplicateCount(text) {
  var count = 0
  var arr = text.toLowerCase().split('');
  console.log(arr)
  var arr2 = []
  //将出现过的字符整合到arr2
  arr.map(val => {
    if (arr2.indexOf(val) == -1) {
      arr2.push(val)
    }
  })
  console.log(arr2)
  //查询新数组中的每个值在原字符串出现的次数 大于2就+1
  arr2.map(val => {
    if (findIndex(arr, val) > 1) {
      count++
    }
  })
  return count
}
function findIndex(arr, text) {
  var count = 0
  arr.map(val => {
    if (val == text) {
      count++
    }
  })
  return count
}
console.log(duplicateCount("Indivisibilities")); //2